import React, { Component } from 'react';
import { Tool } from '../../util/Tool';

class BtnCommon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            borderWidth: 0,
            backgroudColor: '#E8EAF6',
            active: false,
            display: 'none',
            disabled:false
        }
        this.time = setTimeout(() => {
            document.addEventListener('selectionchange', () => {
                this.isInFocusElements();
            })
        }, 1200);
    }

    //btn未激活
    un_active = () => {
        this.setState({ borderWidth: 0, backgroudColor: '#E8EAF6', active: false });
    }
    //btn已激活
    _active = () => {
        this.setState({ borderWidth: 1, backgroudColor: '#E0E0E0', active: true });
    }
    componentDidMount=()=>{
        document.addEventListener('selectionchange', () => {
            this.isInFocusElements();
            this.setState({disabled:false});
        })
    }

    handleClick = () => {
        let rs = this.props.howayMethod(); //传方法过来
        //console.log("rs:",rs);
        if(rs){ //使用按钮
            this.setState({disabled:false});
        }else{//禁用按钮
            this.setState({disabled:true});
        }
        if(this.props.noActive){
            return;
        }
        
        let { active } = this.state;
        if (!active) {
            this._active();
        } else {
            this.un_active();
        }
        // document.addEventListener('selectionchange', () => {
        //     this.isInFocusElements();
        //     this.setState({disabled:false});
        // })
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
        if(this.state.disabled===false){
            this.setState({ borderWidth: 1 });
        }
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
        const { borderWidth, backgroudColor, display,disabled } = this.state
        let left = styles.width===undefined?26:styles.width
        return (
            <div style={{ float: "left" }}>
                <button disabled={disabled} style={{
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