import React, { Component } from 'react';

class PickerColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    handleChange = (value) => {
        this.props.onChange(value);
    }
    render() {
        const { display, pageX, pageY,values } = this.props;
        if(values===undefined){
            values=[];
        }
        return (
            <div style={{
                width: 320,
                height: 320,
                display: display,
                position: "fixed",
                left:pageX+10,
                top:pageY+20
            }}>
                {
                    values.map((value) => {
                        return <button onClick={(e) => { this.handleChange(value);this.props.displayChange(e) }}
                            style={{
                                width: 20,
                                height: 20,
                                float: "left",
                                background: value,
                                cursor: "pointer",
                                borderWidth:0
                            }}></button>
                    })
                }

            </div>
        );
    }
}

export default PickerColor;