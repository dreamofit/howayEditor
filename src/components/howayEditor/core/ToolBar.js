import React, { Component } from 'react';
import { Tool } from '../../util/Tool.js'
import BtnCommon from '../buttons/BtnCommon.js';
import BtnImg from '../buttons/BtnImg.js';

class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnBlodBorder: 0,
        }
    }

    render() {

        const { btnBlodBorder } = this.state;
        const { iconStriket,
            iconBlod,
            iconItalic,
            iconUderline,
            iconImg,
            toolBarStyles,
            buttonCommonStyles,
            buttonFontSizeStyles,
            btnImgStyles,
            focusElements,
            upload,
            focus } = this.props;
        return (
            <div style={toolBarStyles}>
                <BtnCommon
                    focus={focus}
                    howayMethod={Tool.howayBold}
                    elem={'B'}
                    icon={iconBlod === undefined ? undefined : iconBlod}
                    tips={'粗体(CTRL+B)'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    howayMethod={Tool.howayItalic}
                    icon={iconItalic === undefined ? undefined : iconItalic}
                    elem={'I'}
                    tips={'斜体(CTRL+I)'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    howayMethod={Tool.howayUnderline}
                    icon={iconUderline === undefined ? undefined : iconUderline}
                    elem={'U'}
                    tips={'下划线(CTRL+U)'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    howayMethod={Tool.howayStrikeThrough}
                    icon={iconStriket === undefined ? undefined : iconStriket}
                    elem={'STRIKE'}
                    tips={'删除线'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />


                <select style={buttonFontSizeStyles} defaultValue={3}
                    onChange={e => Tool.howayFormatBlock(e.target.value)}>
                    <option value="H1">H1</option>
                    <option value="H2">H2</option>
                    <option value="H3">H3</option>
                    <option value="H4">H4</option>
                    <option value="H5">H5</option>
                    <option value="H6">H6</option>
                    <option value="P">P</option>
                </select>
                <select style={buttonFontSizeStyles} defaultValue={3} onChange={e => Tool.howayFontSize(e.target.value)}>
                    <option value="7">7</option>
                    <option value="6">6</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
                <select style={buttonFontSizeStyles} defaultValue={3}
                    onChange={e => Tool.howayFontName(e.target.value)}>
                    <option value="宋体">宋体</option>
                    <option value="新宋体">新宋体</option>
                    <option value="黑体">黑体</option>
                    <option value="微软雅黑">微软雅黑</option>
                    <option value="Arial">Arial</option>
                    <option value="Arial Black">Arial Black</option>
                    <option value="Times New Roman">Times New Roman</option>
                </select>
                {/* <button onClick={() => {
                    let src = 'http://5b0988e595225.cdn.sohucs.com/images/20190822/dd8d3f80894d48aebd8ae0a64a285d41.jpeg'
                    document.execCommand('inserthtml', false, `<img src=${src} width=${100} >`)
                }}>图片</button> */}
                <BtnImg tips={"上传图片"}
                    upload={upload}
                    icon={iconImg === undefined ? undefined : iconImg}
                    styles={buttonCommonStyles} />
                <button onClick={Tool.howayUndo}>撤销</button>
                <button onClick={Tool.howayRedo}>回退</button>
                <select style={buttonFontSizeStyles} defaultValue={'black'}
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
    toolBarStyles: {
        background: "#E8EAF6",
        height: "auto",
        width: "auto",
        padding: 10
    },
    buttonCommonStyles: {
        width: 26, height: 26, background: "none", cursor: "pointer", margin: 2, borderColor: '#EA80FC'
    },
    buttonFontSizeStyles: {
        width: "auto", height: 26, background: "none", cursor: "pointer", margin: 2
    },
    btnImgStyles: {
        width: "auto",
        height: 26,
        background: "none",
        cursor: "pointer",
        margin: 2,
        borderWidth: 0.2,
        borderColor: '#EA80FC',
        borderRadius: 4
    }
}

export default ToolBar;