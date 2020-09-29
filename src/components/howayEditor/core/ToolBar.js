import React, { Component } from 'react';
import { Tool } from '../../util/Tool.js'
import BtnCommon from '../buttons/BtnCommon.js';

class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnBlodBorder: 0,
        }
    }

    render() {

        const { btnBlodBorder } = this.state;
        const { iconStriket,iconBlod,iconItalic,iconUderline,toolBarStyle,buttonCommonStyle, buttonFontSizeStyle, focusElements, focus } = this.props;
        return (
            <div style={toolBarStyle}>
                <BtnCommon
                    focus={focus}
                    howayMethod={Tool.howayBold}
                    elem={'B'}
                    icon={iconBlod===undefined?undefined:iconBlod}
                    tips={'粗体(CTRL+B)'}
                    styles={buttonCommonStyle}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    howayMethod={Tool.howayItalic}
                    icon={iconItalic===undefined?undefined:iconItalic}
                    elem={'I'}
                    tips={'斜体(CTRL+I)'}
                    styles={buttonCommonStyle}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    howayMethod={Tool.howayUnderline}
                    icon={iconUderline===undefined?undefined:iconUderline}
                    elem={'U'}
                    tips={'下划线(CTRL+U)'}
                    styles={buttonCommonStyle}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    howayMethod={Tool.howayStrikeThrough}
                    icon={iconStriket===undefined?undefined:iconStriket}
                    elem={'STRIKE'}
                    tips={'删除线'}
                    styles={buttonCommonStyle}
                    focusElements={focusElements} />


                <select style={buttonFontSizeStyle} defaultValue={3}
                    onChange={e => Tool.howayFormatBlock(e.target.value)}>
                    <option value="H1">H1</option>
                    <option value="H2">H2</option>
                    <option value="H3">H3</option>
                    <option value="H4">H4</option>
                    <option value="H5">H5</option>
                    <option value="H6">H6</option>
                    <option value="P">P</option>
                </select>
                <select style={buttonFontSizeStyle} defaultValue={3} onChange={e => Tool.howayFontSize(e.target.value)}>
                    <option value="7">7</option>
                    <option value="6">6</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
                <select style={buttonFontSizeStyle} defaultValue={3}
                    onChange={e => Tool.howayFontName(e.target.value)}>
                    <option value="宋体">宋体</option>
                    <option value="新宋体">新宋体</option>
                    <option value="黑体">黑体</option>
                    <option value="微软雅黑">微软雅黑</option>
                    <option value="Arial">Arial</option>
                    <option value="Arial Black">Arial Black</option>
                    <option value="Times New Roman">Times New Roman</option>
                </select>
                <button onClick={() => {
                    let src = 'https://img-blog.csdn.net/20180817101732425?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xxeXlneXNz/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70'
                    document.execCommand('inserthtml', false, `<img src=${src} >`)
                }}>图片</button>
                <button onClick={Tool.howayUndo}>撤销</button>
                <button onClick={Tool.howayRedo}>回退</button>
                <select style={buttonFontSizeStyle} defaultValue={'black'}
                    onChange={e => Tool.howayForeColor(e.target.value)}>
                    <option value="red">红</option>
                    <option value="black">黑</option>
                    <option value="blue">蓝</option>
                    <option value="green">绿</option>
                    <option value="yellow">黄</option>
                </select>
            </div>
        );
    }
}

ToolBar.defaultProps = {
    toolBarStyle:{
        background:"#E8EAF6",
        height:"auto",
        width:"auto",
        padding:10
    },
    buttonCommonStyle: {
        width: 26, height: 26, background: "none", cursor: "pointer", margin: 2,borderColor:'#EA80FC'
    },
    buttonFontSizeStyle: {
        width: "auto", height: 26, background: "none", cursor: "pointer", margin: 2
    }
}

export default ToolBar;