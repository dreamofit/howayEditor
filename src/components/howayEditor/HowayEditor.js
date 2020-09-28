import React, { Component } from 'react';
import Editor from './core/Editor';
import ToolBar from './core/ToolBar';


class HowayEditor extends Component {

    constructor(props){
        super(props);
        this.state = {
            text:""
        }
    }
    handleChange = (e) => {
        if(this.props.onChange!==undefined){
            this.props.onChange(e);
        }
    }
    render() {
        return (
            <div>
                <ToolBar />
                <Editor onChange={this.handleChange} />
            </div>
        );
    }
}

export default HowayEditor;