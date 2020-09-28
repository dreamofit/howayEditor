import React, { Component } from 'react';

class HowayEditor extends Component {

    constructor(props){
        super(props);
        this.state = {
            text:""
        }
    }
    componentDidUpdate=()=>{
        console.log(1)
    }

    handleChange = (e) => {
        let str = e.target.innerHTML;
        console.log(str)
        return e.target.innerHTML;
    }

    //加粗
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
        return (
            <div>
                <button onClick={this.howayBold}>加粗</button>
                <button onClick={this.howayItalic}>斜线</button>
                <button onClick={this.howayUnderline }>下划线</button>
                <button onClick={this.howayFontSize.bind(this,7)}>H</button>
                <button onClick={this.howayFontSize.bind(this,3)}>P</button>
                <button onClick={() => {
                    let src = 'https://img-blog.csdn.net/20180817101732425?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xxeXlneXNz/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70'
                    document.execCommand('inserthtml', false, `<img src=${src} >`)
                }}>图片</button>
                <button onClick={() => document.execCommand('undo', false)}>撤销</button>
                <button onClick={() => document.execCommand('redo', false)}>回退</button>
                <button onClick={this.howayForeColor.bind(this,'red')}>红</button>
                <button onClick={this.howayForeColor.bind(this,'black')}>黑</button>
                <div
                    className="howay-edit"
                    onInput={this.handleChange}
                    style={{ minHeight: 100, padding: 6, border: 1, borderStyle: "solid", borderColor: 'black' }}
                    contentEditable="true">
                </div>
            </div>
        );
    }
}

export default HowayEditor;