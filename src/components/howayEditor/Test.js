import React, { Component } from 'react';
import HowayEditor from './HowayEditor';

class Test extends Component {
    constructor(props){
        super(props)
        this.state={
            name:""
        }
    }
    render() {
        return (
            <div>
                <HowayEditor onChange={e=>console.log(e)} />
            </div>
        );
    }
    
}
export default Test;