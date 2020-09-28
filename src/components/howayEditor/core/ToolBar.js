import React, { Component } from 'react';
import {Tool} from '../../util/Tool.js'

class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnBlodBorder: 0
        }
    }
    howayBold = () => {
        document.execCommand('bold', false);
    }
    //斜体
    howayItalic = () => {
        document.execCommand('Italic', 'false', null)
    }
    //下划线
    howayUnderline = () => {
        document.execCommand('Underline', false)
    }
    //字体大小
    howayFontSize = (param) => {
        document.execCommand('FontSize', false, param)
    }
    //插入html
    howayInsertHtml = (param) => {
        document.execCommand('inserthtml', false, param);
    }

    //修改字体颜色
    howayForeColor = (param) => {
        document.execCommand('foreColor', false, param);
    }
    render() {
        const { btnBlodBorder } = this.state;
        const { buttonCommonStyle } = this.props;
        return (
            <div>
                <button style={{
                    ...buttonCommonStyle,
                    borderWidth: btnBlodBorder, borderStyle: "solid"
                }}
                    onMouseOver={() => { this.setState({ btnBlodBorder: 1 }) }}
                    onMouseOut={() => this.setState({ btnBlodBorder: 0 })}
                    onClick={Tool.howayBold}>B</button>
                <button style={buttonCommonStyle} onClick={Tool.howayItalic}>I</button>
                <button style={buttonCommonStyle} onClick={Tool.howayUnderline}>U</button>
                <button style={buttonCommonStyle} onClick={this.howayFontSize.bind(this, 7)}>H</button>
                <button style={buttonCommonStyle} onClick={this.howayFontSize.bind(this, 3)}>P</button>
                <button onClick={() => {
                    let src = 'https://img-blog.csdn.net/20180817101732425?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xxeXlneXNz/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70'
                    document.execCommand('inserthtml', false, `<img src=${src} >`)
                }}>图片</button>
                <button onClick={() => document.execCommand('undo', false)}>撤销</button>
                <button onClick={() => document.execCommand('redo', false)}>回退</button>
                <button onClick={this.howayForeColor.bind(this, 'red')}>红</button>
                <button onClick={this.howayForeColor.bind(this, 'black')}>黑</button>
            </div>
        );
    }
}

ToolBar.defaultProps = {
    buttonCommonStyle: {
        width: 26, height: 26, background: "none", cursor: "pointer"
    },
}

export default ToolBar;