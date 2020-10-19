import React, { Component } from 'react';
import ImgEdit from '../img/ImgEdit';

class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            open:false,
            X:0,
            Y:0
        }
    }

    componentDidMount = () => {
        document.addEventListener('selectionchange', (e) => {
            //console.log(e);
            
            if (e.target.tagName === 'IMG') {
                console.log("yes");
                this.setState({open:true});
            }
        });
        
    }

    handleChange = (e) => {
        if (this.props.onChange !== undefined) {
            this.props.onChange(e.target.innerHTML);
        }
        return e.target.innerHTML;
    }

    render() {
        const { EditorStyles,height } = this.props;
        const {open,X,Y} = this.state;
        return (
            <div className="howay-edit"
                id="howay-editor"
                onInput={this.handleChange}
                style={{...EditorStyles,height:height,width:"100%",float:"none"}}
                onFocus={e => this.setState({ focus: true })}
                onBlur={e => this.setState({ focus: false })}
                contentEditable="true">
                
            </div>
        );
    }
}
Editor.defaultProps = {
    EditorStyles: {
        minHeight:50,
        overflowY: "scroll",
        padding: 6,
        borderWidth: "0.1px",
        borderStyle: "solid",
        borderColor: 'black'
    },
    height:500
}

export default Editor;