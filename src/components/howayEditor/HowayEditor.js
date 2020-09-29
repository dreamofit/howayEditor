import React, { Component } from 'react';
import Editor from './core/Editor';
import ToolBar from './core/ToolBar';


class HowayEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            focus: false,
            focusElements: []
        }
        
    }

    componentDidMount =()=>{
        document.addEventListener('selectionchange', () => {
            let focus = false;
            if(this.editorRef!==undefined){
                focus = this.editorRef.state.focus;
            }
            if (focus) {
                let selection = window.getSelection();
                this.forEachparentNode(selection.anchorNode);
            }
        })
    }

    focusChange = (focus) => {
        this.setState({ focus: focus })
    }

    componentDidUpdate=()=>{
        console.log(this.state.focusElements);
    }

    forEachparentNode = (node) => {
        let focusElements = [];
        while("howay-edit" !== node.className){
            let name = node.parentElement.nodeName;
            let value = "";
            if("DIV"!==name){
                if ("FONT" === name) {
                    if (node.parentElement.face !== "") {
                        value = node.parentElement.face;
                    } else if (node.parentElement.color !== "") {
                        value = node.parentElement.color;
                    } else if (node.parentElement.size !== "") {
                        value = node.parentElement.size;
                    }
                }
                let obj = { name: name, value: value };
                focusElements.push(obj);
            }
            node = node.parentNode;
        }
        this.setState({ focusElements: focusElements });
    }

    // forEachparentNode = (node) => {
    //     let { focusElements } = this.state;
    //     if ("howay-edit" === node.className) {
    //         return;
    //     } else {
    //         this.forEachparentNode(node.parentNode);
    //         if ("DIV" !== node.parentElement.nodeName) {
    //             let name = node.parentElement.nodeName;
    //             let value = "";
    //             if ("FONT" === name) {
    //                 if (node.parentElement.face !== "") {
    //                     value = node.parentElement.face;
    //                 } else if (node.parentElement.color !== "") {
    //                     value = node.parentElement.color;
    //                 } else if (node.parentElement.size !== "") {
    //                     value = node.parentElement.size;
    //                 }
    //             }
    //             let obj = { name: name, value: value };
    //             focusElements.push(obj);
    //         }
    //         this.setState({ focusElements: focusElements })
    //     }
    // }

    handleChange = (e) => {
        if (this.props.onChange !== undefined) {
            this.props.onChange(e);
        }
    }



    render() {
        const { styles } = this.props;
        const { focusElements } = this.state;

        return (
            <div style={styles}>
                <ToolBar focusElements={focusElements} />
                <Editor
                    ref={e => this.editorRef = e}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

HowayEditor.defaultProps = {
    styles: {
        width: "60%",
        height: "100%",
        marginLeft: '20%'
    }
}
export default HowayEditor;