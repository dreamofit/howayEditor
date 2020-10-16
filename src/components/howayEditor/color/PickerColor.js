import React, { Component } from 'react';

class PickerColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            r: 0,
            g: 0,
            b: 0,
            a: 1,
            color: "rgba(0,0,0)",
            list:[0]
        }
    }

    componentDidMount = () => {
        let list = [];
        for(let i=0;i<256;i++){
            list.push(i);
        }
        this.setState({list:list});
    }

    handleChange = (value) => {
        this.props.onChange(value);
    }

    rChange = (e) => {
        let { r, g, b, color } = this.state;
        r = e.target.value;
        color = "rgba(" + r + "," + g + "," + b + ")";
        this.setState({ r: r, color: color });
    }

    gChange = (e) => {
        let { r, g, b, color } = this.state;
        g = e.target.value;
        color = "rgba(" + r + "," + g + "," + b + ")";
        this.setState({ g: g, color: color });
    }

    bChange = (e) => {
        let { r, g, b, color } = this.state;
        b = e.target.value;
        color = "rgba(" + r + "," + g + "," + b + ")";
        this.setState({ b: b, color: color });
    }

    render() {
        const { display, pageX, pageY, values } = this.props;
        const { color,list } = this.state;
        if (values === undefined) {
            values = [];
        }
        return (
            <div style={{
                width: 320,
                height: 320,
                display: display,
                position: "fixed",
                left: pageX + 10,
                top: pageY + 20,
                background:"#FFFFFF"
            }}>
                {
                    values.map((value) => {
                        return <button onClick={(e) => { this.handleChange(value); this.props.displayChange(e) }}
                            style={{
                                width: 20,
                                height: 20,
                                float: "left",
                                background: value,
                                cursor: "pointer",
                                borderWidth: 0
                            }}></button>
                    })
                }
                <br />
                <br />
                 <input id="range" defaultValue="0" type="range" min="0" max="256" step="1" onChange={this.rChange} />
                <input id="range" defaultValue="0" type="range" min="0" max="256" step="1" onChange={this.gChange} />
                <input id="range" defaultValue="0" type="range" min="0" max="256" step="1" onChange={this.bChange} />
                <button onClick={(e) => { this.handleChange(color); this.props.displayChange(e) }}
                    style={{
                        width: 20,
                        height: 20,
                        background: color,
                        cursor: "pointer",
                        borderWidth: 1
                    }}></button>


            </div>
        );
    }
}

export default PickerColor;