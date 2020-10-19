import React, { Component } from 'react';
import PickerColor from '../color/PickerColor';

class BtnColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.elem,
            display: "none",
            display2: "none",
            pageX: 0,
            pageY: 0,
            borderWidth:0
        }
        this.time = setTimeout(() => {
            document.addEventListener('selectionchange', () => {
                this.isInFocusElements();
            })
        }, 2000);
    }

    pagePositionChange=(X,Y)=>{
        this.setState({pageX:X,pageY:Y});
    }

    displayChange = (e) => {
        let display = this.state.display;
        if (display === "none") {
            display = "";
        } else {
            display = "none";
        }
        this.setState({ display: display, pageX: e.pageX, pageY: e.pageY });
    }
    isInFocusElements = () => {
        const { focusElements, elem, mode } = this.props;
        let key = "color";
        if (mode === "forecolor") {
            key = "color";
        } else if (mode === "backcolor") {
            key = "style";
        }
        for (let i in focusElements) {
            if (key === 'color') {
                if (focusElements[i].color !== undefined) {
                    if (focusElements[i].color !== "") {
                        this.setState({ value: focusElements[i].color });
                        return;
                    } else {
                        if (focusElements[i].style !== undefined && focusElements[i].style !== "") {
                            if (focusElements[i].style.color !== "") {
                                this.setState({ value: focusElements[i].style.color });
                                return;
                            }
                        }
                    }
                }
            }
            else if (key === 'style') {
                //console.log(focusElements[i].style);
                if (focusElements[i].style !== undefined && focusElements[i].style !== "") {
                    if (focusElements[i].style.backgroundColor !== "") {
                        this.setState({ value: focusElements[i].style.backgroundColor });
                        return;
                    }
                }
            }
        }
        this.setState({ value: elem });
        return;
    }

    valueChange = (e) => {
        const { howayMethod } = this.props;
        howayMethod(e);
        this.setState({ value: e });
        // document.addEventListener('selectionchange', () => {
        //     this.isInFocusElements();
        // })
    }

    handleMouseOver = () => {
        this.setState({ borderWidth: 1 });
        this.time = setTimeout(() => {
            this.setState({ display2: '' });
        }, 1200);
    }
    handleMouseOut = () => {
        this.setState({ borderWidth: 0, display2: 'none' });
        clearTimeout(this.time);
    }

    render() {
        const { styles, tips, mode } = this.props;
        const { value, display, display2, pageX, pageY, values,borderWidth } = this.state;
        let left = styles.width === null ?20 : styles.width;
        let top = styles.height === null ?20 : styles.height;
        return (
            <div id={"btn-color-"+mode} style={{float:"left"}}>
                <button
                    onClick={e => this.displayChange(e)}
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    style={{ ...styles, background: value, borderWidth: borderWidth }}></button>
                <PickerColor
                    values={values}
                    displayChange={this.displayChange}
                    pageX={pageX}
                    pageY={pageY}
                    display={display}
                    pagePositionChange={this.pagePositionChange}
                    onChange={this.valueChange} />
                <div style={{
                    display: display2,
                    position: 'fixed',
                    borderStyle: 'solid',
                    borderTopWidth: 0.2,
                    borderLeftWidth: 0.2,
                    borderRightWidth: 0.2,
                    borderBottomWidth: 0,
                    fontSize: 8,
                    marginLeft: left,
                    marginTop:top+10,
                    background: '#FFF'
                }}>{tips}</div>
            </div>
        );
    }
}

export default BtnColor;