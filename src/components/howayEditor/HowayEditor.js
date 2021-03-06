import React, { Component } from 'react';
import Editor from './core/Editor';
import ToolBar from './core/ToolBar';
import ImgEdit from './img/ImgEdit';


class HowayEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            focus: false,
            focusElements: [],
            isImgEdit:false,
            open:false,
            X:0,
            Y:0
        }

    }

    componentDidMount = () => {
        //监听光标改变事件
        document.addEventListener('selectionchange', () => {
            let focus = false;
            if (this.editorRef !== undefined) {
                focus = this.editorRef.state.focus;
            }
            if (focus) {  //焦点在编辑器内
                let selection = window.getSelection();
                this.forEachparentNode(selection.anchorNode);
                if(selection.type==='Range'){ //是否选中
                    //bug:只根据了起点和终点的信息，并不准确，需要修改
                    let range = selection.anchorOffset-selection.focusOffset;
                    if(selection.anchorNode.firstElementChild===undefined||selection.anchorNode.firstElementChild===null){
                        this.setState({isImgEdit:false});
                        return;
                    }else if((range===1||range===-1)&&selection.anchorNode.firstElementChild.localName==='img'){
                        this.setState({isImgEdit:true});
                        return;
                    }
                }
            }
            this.setState({isImgEdit:false}); //图片编辑为false
        });
        document.getElementById("howay-editor").addEventListener('click',(e)=>{
            this.setState({open:false,X:e.clientX,Y:e.clientY}); 
        });
        document.getElementById("howay-editor").addEventListener('dblclick',(e)=>{
            if(e.target.tagName==='IMG'&&this.state.isImgEdit){
                this.setState({open:true});
            }
        })
        
    }

    pagePositionChange=(pX,pY)=>{
        let {X,Y} = this.state;
        let sp1 = X-pX;
        let sp2 = Y-pY;
        if(sp1<0){
            sp1 = -sp1;
        }
        if(sp2<0){
            sp2 = -sp2;
        }
        if(sp1>50||sp2>50){
            return;
        }else{
            this.setState({X:pX,Y:pY});
        }
        
    }

    focusChange = (focus) => {
        this.setState({ focus: focus })
    }

    componentDidUpdate = () => {
        //console.log(this.state.focusElements);
    }

    forEachparentNode = (node) => {
        let focusElements = [];
        while ("howay-edit" !== node.className) {
            if(node.parentElement===undefined||node.parentElement===""||node.parentElement===null){
                return;
            }
            let name = node.parentElement.nodeName;
            //console.log(node.parentElement.nodeName);
            let face = "";
            let color = "";
            let size = "";
            let style = "";
            if ("DIV" !== name) {
                //console.log(node.parentElement);
                if ("FONT" === name) {
                    if (node.parentElement.face !== "") {
                        face = node.parentElement.face;
                    } 
                    if (node.parentElement.color !== "") {
                        color = node.parentElement.color;
                    } 
                    if (node.parentElement.size !== "") {
                        size = node.parentElement.size;
                    }
                    if(node.parentElement.style.backgroundColor!==""){
                        //console.log(node.parentElement.style.backgroundColor);
                        style = node.parentElement.style;
                    }
                }
                else if("SPAN" === name){
                    //console.log(node.parentElement);
                    style = node.parentElement.style;
                }
                let obj = { name: name, face: face,color:color,size:size,style:style };
                focusElements.push(obj);
            }
            node = node.parentNode;
        }
        this.setState({ focusElements: focusElements });
    }


    handleChange = (e) => {
        if (this.props.onChange !== undefined) {
            this.props.onChange(e);
        }
    }

    close=()=>{
        this.setState({open:false});
    }

    render() {
        const { styles,upload,editorHeight } = this.props;
        const { focusElements,open,X,Y } = this.state;

        return (
            <div id='howayEditor' style={styles}>
                <ToolBar {...this.props} focusElements={focusElements} upload={upload}
                    focus={this.editorRef === undefined ? false : this.editorRef.state.focus} />
                <Editor 
                    ref={e => this.editorRef = e}
                    height={editorHeight}
                    onChange={this.handleChange}
                />
                <ImgEdit upload={upload} pagePositionChange={this.pagePositionChange} close={this.close} id="img-upload-two" open={open} X={X} Y={Y} />
            </div>
        );
    }
}

HowayEditor.defaultProps = {
    styles: {
        width: "60%",
        height: "100%",
        marginLeft: '20%',
        float:"none"
    },
    editorHeight:500
}
export default HowayEditor;