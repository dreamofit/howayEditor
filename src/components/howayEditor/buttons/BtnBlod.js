import React, { Component } from 'react';
import { Tool } from '../../util/Tool';

class BtnBlod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            borderWidth: 0,
            backgroudColor:'#FFF'
        }
    }

    //btn未激活
    un_active =()=>{
        this.setState({borderWidth:0,backgroudColor:'#FFF'})
    }
    //btn已激活
    _active=()=>{
        this.setState({borderWidth:1,backgroudColor:'#E0E0E0'})
    }

    handleClick = ()=> {
        let r = Tool.howayBold();
        let {borderWidth} = this.state;
        if(borderWidth===0){
            this._active();
        }else{
           this.un_active(); 
        }
        
    }
    

    render() {
        const { styles,focusElements } = this.props;
        const { borderWidth,backgroudColor } = this.state
        return (
            <button style={{
                ...styles,
                borderWidth: borderWidth, borderStyle: "solid",
                backgroundColor:backgroudColor
            }}
                onMouseOver={() => { this.setState({ borderWidth: 1 }) }}
                onMouseOut={() => this.setState({ borderWidth: 0 })}
                onClick={this.handleClick}>
                    B
            </button>
        );
    }
}

export default BtnBlod;