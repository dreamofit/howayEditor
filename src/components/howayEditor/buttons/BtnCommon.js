import React, { Component } from 'react';
import { Tool } from '../../util/Tool';

class BtnCommon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            borderWidth: 0,
            backgroudColor: '#FFF',
            active: true,
            display: 'none'
        }
    }

    //btn未激活
    un_active = () => {
        this.setState({ borderWidth: 0, backgroudColor: '#FFF', active: false });
    }
    //btn已激活
    _active = () => {
        this.setState({ borderWidth: 1, backgroudColor: '#E0E0E0', active: false });
    }

    handleClick = () => {
        this.props.howayMethod(); //传方法过来
        let { active } = this.state;
        if (!active) {
            this._active();
        } else {
            this.un_active();
        }
        document.addEventListener('selectionchange', () => {
            this.isInFocusElements();
        })
    }

    isInFocusElements = () => {
        const { focusElements,elem } = this.props;
        //console.log(focusElements);
        let exit = false;
        for (let i in focusElements) {
            if (elem === focusElements[i].name) {
                exit = true;
                break;
            }
        }
        if (exit) {
            this._active();
        } else {
            this.un_active();
        }
    }

    handleMouseOver = () => {
        this.setState({ borderWidth: 1 });
        this.time = setTimeout(() => {
            this.setState({ display: '' });
        }, 1200);
    }
    handleMouseOut = () => {
        this.setState({ borderWidth: 0, display: 'none' });
        clearTimeout(this.time);
    }

    render() {
        const { icon,styles,tips,elem } = this.props;
        const { borderWidth, backgroudColor, display } = this.state
        let left = styles.width===undefined?26:styles.width
        return (
            <div style={{ float: "left" }}>
                <button style={{
                    ...styles,
                    borderWidth: borderWidth, borderStyle: "solid",
                    backgroundColor: backgroudColor
                }}
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    onClick={this.handleClick}>
                    {icon===undefined?elem.substring(0,1):icon}</button>
                <div style={{
                    display: display,
                    position: 'fixed',
                    borderStyle: 'solid',
                    borderTopWidth: 0.2,
                    borderLeftWidth: 0.2,
                    borderRightWidth: 0.2,
                    borderBottomWidth: 0,
                    fontSize:8,
                    marginLeft:left,
                    background:'#FFF'
                }}>{tips}</div>
            </div>
        );
    }
}

export default BtnCommon;