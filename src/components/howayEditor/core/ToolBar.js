import React, { Component } from 'react';
import { Tool } from '../../util/Tool.js'
import BtnCommon from '../buttons/BtnCommon.js';
import BtnImg from '../buttons/BtnImg.js';
import BtnSelect from '../buttons/BtnSelect.js';

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
            iconCenter,
            iconLeft,
            iconRight,
            iconFull,
            iconUndo,
            iconRedo,
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
                <BtnCommon
                    focus={focus}
                    howayMethod={Tool.howayJustifyCenter}
                    icon={iconCenter === undefined ? undefined : iconCenter}
                    elem={'center'}
                    tips={'居中对齐'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    howayMethod={Tool.howayJustifyLeft}
                    icon={iconLeft === undefined ? undefined : iconLeft}
                    elem={'left'}
                    tips={'左对齐'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    howayMethod={Tool.howayJustifyRight}
                    icon={iconRight === undefined ? undefined : iconRight}
                    elem={'right'}
                    tips={'右对齐'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    howayMethod={Tool.howayJustifyFull}
                    icon={iconFull === undefined ? undefined : iconFull}
                    elem={'full'}
                    tips={'两端对齐'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />

                <BtnSelect styles={buttonFontSizeStyles} 
                    howayMethod={Tool.howayFormatBlock}
                    focusElements={focusElements}
                    tips={'段落'}
                    _key={'block'}
                    options={[{value:"H1"},
                    {value:"H2"},{value:"H3"},
                    {value:"H4"},{value:"H5"},
                    {value:"H6"},{value:"P"}]} />
                
                <BtnSelect styles={buttonFontSizeStyles} 
                    howayMethod={Tool.howayFontSize}
                    focusElements={focusElements}
                    tips={'文字大小'}
                    _key={'fontsize'}
                    options={[{value:"1"},
                    {value:"2"},{value:"3"},
                    {value:"4"},{value:"5"},
                    {value:"6"},{value:"7"}]} />
                <BtnSelect styles={buttonFontSizeStyles} 
                    howayMethod={Tool.howayFontName}
                    focusElements={focusElements}
                    tips={'字体'}
                    _key={'fontname'}
                    options={[{value:"宋体"},
                    {value:"新宋体"},{value:"黑体"},
                    {value:"微软雅黑"},{value:"Arial"},
                    {value:"Arial Black"},{value:"imes New Roman"}]} />
                {/* <button onClick={() => {
                    let src = 'http://5b0988e595225.cdn.sohucs.com/images/20190822/dd8d3f80894d48aebd8ae0a64a285d41.jpeg'
                    document.execCommand('inserthtml', false, `<img src=${src} width=${100} >`)
                }}>图片</button> */}
                <BtnImg tips={"上传图片"}
                    upload={upload}
                    icon={iconImg === undefined ? undefined : iconImg}
                    styles={buttonCommonStyles} />
                <BtnCommon
                    focus={focus}
                    howayMethod={Tool.howayUndo}
                    icon={iconUndo === undefined ? undefined : iconUndo}
                    elem={'undo'}
                    tips={'撤销(CTRL+Z)'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    howayMethod={Tool.howayRedo}
                    icon={iconRedo === undefined ? undefined : iconRedo}
                    elem={'redo'}
                    tips={'回退(CTRL+Y)'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <BtnSelect styles={buttonFontSizeStyles} 
                    howayMethod={Tool.howayForeColor}
                    focusElements={focusElements}
                    tips={'文字颜色'}
                    _key={'forecolor'}
                    options={[{value:"red",title:"红"},
                    {value:"black",title:"黑"},
                    {value:"green",title:"绿"},{value:"blue",title:"蓝"},
                    {value:"yellow",title:"黄"}]} />
                <select style={buttonFontSizeStyles} defaultValue={'black'}
                    onChange={e => Tool.howayForeColor(e.target.value)}>
                   
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