import React, { Component } from 'react';
import ImgEdit from '../img/ImgEdit';

class BtnImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            display: "none",
            borderWidth: 0
        }
    }

    componentDidMount = () => {
        document.addEventListener('dblclick', (e) => {
            console.log(e.target)
            if ("imgbtn" === e.target.className) {
                this.setState({ open: true })
            } else if ("img-edit" === e.target.className) {
                return;
            } else {
                this.setState({ open: false })
            }

        })
    }

    openOrClose = () => {
        let open = !this.state.open;
        this.setState({ open });
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
        const { open, display, borderWidth } = this.state;
        const { styles, icon, tips,upload } = this.props;
        let left = styles.width === undefined ? 26 : styles.width
        return (
            <div style={{ float: "left" }}>
                <button style={{ ...styles, borderWidth: borderWidth }}
                    className='imgbtn'
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    onClick={this.openOrClose}>
                        
                    {icon === undefined ? "图片" : icon}
                </button>
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
                <ImgEdit pagePositionChange={this.pagePositionChange} upload={upload} open={open} close={()=>this.setState({open:false})} />
            </div>
        );
    }
}



export default BtnImg;