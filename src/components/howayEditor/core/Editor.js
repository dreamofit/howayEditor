import React, { Component } from 'react';

class Editor extends Component {

    handleChange = (e) => {
        if(this.props.onChange!==undefined){
            this.props.onChange(e.target.innerHTML);
        }
        let str = e.target.innerHTML;
        //console.log(str)
        return e.target.innerHTML;
    }
    
    render() {
        return (
            <div className="howay-edit"
            onInput={this.handleChange}
            style={{ minHeight: 100, padding: 6, border: 1, borderStyle: "solid", borderColor: 'black' }}
            contentEditable="true">
                
            </div>
        );
    }
}

export default Editor;