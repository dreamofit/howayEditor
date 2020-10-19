import React, { Component } from 'react';
import Drag from '../../drag/Drag';
import { Tool } from '../../util/Tool';

class ImgEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            src: "",
            check: "mid",
        }
    }

    close = () => {
        this.props.close();
    }

    upload = (e) => {
        let formData = new FormData();
        console.log(this.props);
        formData.append('file', e.target.files[0]);
        fetch(this.props.upload, {
            body: formData,
            method: "POST",
        }).then(res => {
            res.json().then(r => {
                this.setState({ src: r.url });
            })
        }).catch((e) => {
            console.log(e)
        });
    }

    checkChange = (e) => {
        console.log(e.target.value);
        let type = e.target.value;
        let width = '50%';
        if (type === 'big') {
            width = "100%";
        } else if (type === 'mid') {
            width = "50%"
        } else if (type === 'small') {
            width = "25%";
        } else {
            this.setState({ check: "cust" });
            return;
        }
        this.setState({ check: type, width: width });
    }

    commit = () => {
        const { src, width, height } = this.state;
        if (src === '') {
            return;
        }
        let param = `<img src=${src} width=${width} height=${height} >`;
        Tool.howayInsertHtml(param);
        this.props.close();
    }

    render() {
        const { open, X, Y, styles, radioStyles, inputUrlStyles, id, upload, pagePositionChange } = this.props;
        let clientX = document.body.clientWidth / 2;
        let clientY = document.body.clientHeight / 2;
        let floatX = 0;
        let floatY = 0;
        // if (X !== undefined) {
        //     if (X > clientX) {
        //         floatX = -styles.width;
        //     }
        // }
        // if (Y !== undefined) {
        //     if (Y > clientY) {
        //         floatY = -styles.height;
        //     }
        // }
        const { check, src } = this.state;
        let display = open ? "" : "none";
        let custDisplay = 'none';
        if (check === 'cust') {
            custDisplay = '';
        }
        return (
            <div className='img-edit' style={{ ...styles, left: X, top: Y, display: display, zIndex: 999 }}>
                {X===undefined?null:
                    <Drag pagePositionChange={pagePositionChange}
                    pageX={X} pageY={Y}
                    styles={{
                        width: "100%",
                        height: 24, cursor: "move",
                        marginTop: -styles.padding,
                        marginLeft: styles.padding,
                        marginBottom: 30
                    }}
                    close={this.close} />
                }
                
                <label className='img-edit'>url:
                <input onChange={e => this.setState({ src: e.target.value })}
                        value={src}
                        className='img-edit'
                        style={inputUrlStyles}></input></label>
                <div className='img-edit' style={{ marginTop: 50 }} onChange={e => this.checkChange(e)}>
                    <label className='img-edit'>图片大小：</label>
                    <input className='img-edit' id='big-radio' style={radioStyles} name='img_size' type='radio' value="big" />大
                    <input className='img-edit' id='mid-radio' style={radioStyles} name='img_size' type='radio' value="mid" />中
                    <input className='img-edit' id='small-radio' style={radioStyles} name='img_size' type='radio' value="small" />小
                    <input className='img-edit' id='cust-radio' style={radioStyles} name='img_size' type='radio' value="cust" />自定义
                    <div className='img-edit' style={{ float: "right", height: 10 }}>
                        <div className='img-edit' style={{ display: custDisplay }}>
                            <label className='img-edit' style={{ marginLeft: 10 }}>width:</label>
                            <input className='img-edit' onChange={e => this.setState({ width: e.target.value })} style={{ width: 40, marginLeft: 4 }} />
                            <label className='img-edit' style={{ marginLeft: 10 }}>height:</label>
                            <input className='img-edit' onChange={e => this.setState({ height: e.target.value })} style={{ width: 40, marginLeft: 4 }} />
                        </div>
                    </div>
                </div>
                <div style={{ margin: 10, width: "100%", height: "auto" }}>
                    <img src={this.state.src} id="show" height="100" ></img>
                </div>
                {upload === undefined ? <div style={{ height: 10, width: 80, marginTop: 20, float: "left" }}></div> :
                    <form className='img-edit' style={{ marginTop: 20, float: "left" }} encType="multipart/form-data">

                        <label className='img-edit' htmlFor={id}>
                            <span style={{
                                cursor: "pointer",
                                borderWidth: 1,
                                borderColor: "#D7CCC8",
                                borderStyle: "solid",
                                padding: 8,
                                borderRadius: 4,
                                fontSize: 14,
                                width: 80,
                                background: "#BDBDBD",
                                color: "#263238"
                            }} className='img-edit' >上传本地图片</span>
                        </label>

                        <input style={{ display: "none" }}
                            id={id} type='file' accept="image/*"
                            onChange={this.upload} />
                    </form>
                }


                <button className='img-edit' onClick={this.close}
                    style={{
                        marginTop: 10,
                        float: "left",
                        marginLeft: "28%",
                        background: '#5C6BC0',
                        borderWidth: 2,
                        borderColor: '#E0F2F1',
                        borderRadius: 6,
                        width: 80,
                        height: 36,
                        color: "#FFF",
                        cursor: "pointer"

                    }}>取消</button>
                <button className='img-edit' onClick={this.commit}
                    style={{
                        marginTop: 10,
                        marginLeft: 10,
                        background: '#43A047',
                        borderWidth: 2,
                        borderColor: '#E0F2F1',
                        borderRadius: 6,
                        width: 80,
                        height: 36,
                        color: "#FFF",
                        cursor: "pointer"

                    }}>确定</button>
            </div>
        );
    }
}
ImgEdit.defaultProps = {
    open: false,
    styles: {
        width: 510,
        height: "auto",
        background: '#EEEEEE',
        position: 'fixed',
        padding: 30
    },
    radioStyles: {
        width: 14, height: 14, cursor: "pointer", marginLeft: 10
    },
    inputUrlStyles: {
        marginLeft: 20,
        width: "80%",
        height: 24
    },
    id: "img-upload",
}
export default ImgEdit;