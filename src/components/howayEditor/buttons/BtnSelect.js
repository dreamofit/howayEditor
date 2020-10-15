import React, { Component } from 'react';

class BtnSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "",
            display: "none"
        }
        this.time = setTimeout(() => {
            document.addEventListener('selectionchange', () => {
                this.isInFocusElements();
            })
        }, 1200);
    }
    isInFocusElements = () => {
        const { focusElements, options,elem } = this.props;
        let value = "name";
        if(elem!==undefined){
            value = elem;
        }
        for (let i in focusElements) {
            for (let j = 0; j < options.length; j++) {
                //console.log(focusElements[i]);
                if (options[j].value === focusElements[i][value]) {
                    this.setState({ selected: options[j].value });
                    return;
                }
            }
        }
        this.setState({ selected: "" });
    }

    handleChange = (e) => {
        const { howayMethod } = this.props;
        howayMethod(e.target.value);
        this.setState({ selected: e.target.value });
        // document.addEventListener('selectionchange', () => {
        //     this.isInFocusElements();
        // })
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
        const { selected, display } = this.state;
        const { styles, tips, options,_key } = this.props;
        let left =  document.getElementById('select'+_key)===null?0:document.getElementById('select'+_key).offsetWidth;
       
        //console.log(_key);
        return (
            <div id={"select"+_key} style={{ float: "left",width:"auto" }}>
                <select  style={styles} value={selected}
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    onChange={this.handleChange}>

                    <option value="" disabled>---</option>
                    {
                        options.map(option => {
                            return <option key={"select_"+_key+option.value} value={option.value}>{option.title === undefined ? option.value : option.title}</option>
                        })
                    }
                </select>
                <div style={{
                    display: display,
                    position: 'fixed',
                    borderStyle: 'solid',
                    borderTopWidth: 0.2,
                    borderLeftWidth: 0.2,
                    borderRightWidth: 0.2,
                    borderBottomWidth: 0,
                    fontSize: 8,
                    marginLeft: left,
                    background: '#FFF'
                }}>{tips}</div>
            </div>
        );
    }
}

export default BtnSelect;