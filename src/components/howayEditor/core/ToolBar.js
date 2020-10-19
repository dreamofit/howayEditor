import React, { Component } from 'react';
import { Tool } from '../../util/Tool.js'
import BtnColor from '../buttons/BtnColor.js';
import BtnCommon from '../buttons/BtnCommon.js';
import BtnImg from '../buttons/BtnImg.js';
import BtnSelect from '../buttons/BtnSelect.js';
import blod from '../../../icons/bold.png';
import italic from '../../../icons/italic.png';
import underline from '../../../icons/underline.png';
import strike from '../../../icons/strike.png';
import aligncenter from '../../../icons/aligncenter.png';
import alignjustify from '../../../icons/alignjustify.png';
import alignleft from '../../../icons/alignleft.png';
import alignright from '../../../icons/alignright.png';
import clearformat from '../../../icons/clearformat.png';
import image from '../../../icons/image.png';
import redo from '../../../icons/redo.png';
import undo from '../../../icons/undo.png';

const iconBlod = Icon(blod);
const iconItalic = Icon(italic);
const iconStriket = Icon(strike);
const iconUderline = Icon(underline);
const iconImg = Icon(image);
const iconCenter = Icon(aligncenter);
const iconLeft = Icon(alignleft);
const iconRight = Icon(alignright);
const iconFull = Icon(alignjustify);
const iconUndo = Icon(undo);
const iconRedo = Icon(redo);
const iconDelete = Icon(clearformat);

function Icon(elem) {
    return <img alt={elem} src={elem} width={14} />;
}

class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {

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
            iconDelete,
            toolBarStyles,
            buttonCommonStyles,
            buttonFontSizeStyles,
            BtnColorStyles,
            focusElements,
            buttonCommonActiveBackgroud,
            upload,
            focus } = this.props;
        let commonButtonBackgroud = toolBarStyles.background === undefined ? '#E8EAF6' : toolBarStyles.background;
        return (
            <div style={toolBarStyles}>

                <BtnCommon
                    focus={focus}
                    backgroud={commonButtonBackgroud}
                    activeBackgroud={buttonCommonActiveBackgroud}
                    howayMethod={Tool.howayBold}
                    elem={'B'}
                    icon={iconBlod === undefined ? undefined : iconBlod}
                    tips={'粗体(CTRL+B)'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    backgroud={commonButtonBackgroud}
                    activeBackgroud={buttonCommonActiveBackgroud}
                    howayMethod={Tool.howayItalic}
                    icon={iconItalic === undefined ? undefined : iconItalic}
                    elem={'I'}
                    tips={'斜体(CTRL+I)'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    backgroud={commonButtonBackgroud}
                    activeBackgroud={buttonCommonActiveBackgroud}
                    howayMethod={Tool.howayUnderline}
                    icon={iconUderline === undefined ? undefined : iconUderline}
                    elem={'U'}
                    tips={'下划线(CTRL+U)'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    backgroud={commonButtonBackgroud}
                    activeBackgroud={buttonCommonActiveBackgroud}
                    howayMethod={Tool.howayStrikeThrough}
                    icon={iconStriket === undefined ? undefined : iconStriket}
                    elem={'STRIKE'}
                    tips={'删除线'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    backgroud={commonButtonBackgroud}
                    activeBackgroud={buttonCommonActiveBackgroud}
                    howayMethod={Tool.howayJustifyCenter}
                    noActive
                    icon={iconCenter === undefined ? undefined : iconCenter}
                    elem={'center'}
                    tips={'居中对齐'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    backgroud={commonButtonBackgroud}
                    activeBackgroud={buttonCommonActiveBackgroud}
                    howayMethod={Tool.howayJustifyLeft}
                    noActive
                    icon={iconLeft === undefined ? undefined : iconLeft}
                    elem={'left'}
                    tips={'左对齐'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    backgroud={commonButtonBackgroud}
                    activeBackgroud={buttonCommonActiveBackgroud}
                    howayMethod={Tool.howayJustifyRight}
                    noActive
                    icon={iconRight === undefined ? undefined : iconRight}
                    elem={'right'}
                    tips={'右对齐'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    backgroud={commonButtonBackgroud}
                    activeBackgroud={buttonCommonActiveBackgroud}
                    howayMethod={Tool.howayJustifyFull}
                    noActive
                    icon={iconFull === undefined ? undefined : iconFull}
                    elem={'full'}
                    tips={'两端对齐'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <BtnImg tips={"上传图片"}
                    upload={upload}
                    icon={iconImg === undefined ? undefined : iconImg}
                    styles={buttonCommonStyles} />
                <BtnSelect styles={buttonFontSizeStyles}
                    howayMethod={Tool.howayFormatBlock}
                    focusElements={focusElements}
                    tips={'段落'}
                    _key={'block'}
                    options={[{ value: "H1" },
                    { value: "H2" }, { value: "H3" },
                    { value: "H4" }, { value: "H5" },
                    { value: "H6" }, { value: "P" }]} />

                <BtnSelect styles={buttonFontSizeStyles}
                    howayMethod={Tool.howayFontSize}
                    focusElements={focusElements}
                    tips={'文字大小'}
                    elem={"size"}
                    _key={'fontsize'}
                    options={[{ value: "1" },
                    { value: "2" }, { value: "3" },
                    { value: "4" }, { value: "5" },
                    { value: "6" }, { value: "7" }]} />
                <BtnSelect styles={buttonFontSizeStyles}
                    howayMethod={Tool.howayFontName}
                    focusElements={focusElements}
                    elem={"face"}
                    tips={'字体'}
                    _key={'fontname'}
                    options={[{ value: "宋体" },
                    { value: "新宋体" }, { value: "黑体" },
                    { value: "微软雅黑" }, { value: "Arial" },
                    { value: "Arial Black" }, { value: "imes New Roman" }]} />
                {/* <button onClick={() => {
                    let src = 'http://5b0988e595225.cdn.sohucs.com/images/20190822/dd8d3f80894d48aebd8ae0a64a285d41.jpeg'
                    document.execCommand('inserthtml', false, `<img src=${src} width=${100} >`)
                }}>图片</button> */}

                <BtnCommon
                    focus={focus}
                    backgroud={commonButtonBackgroud}
                    activeBackgroud={buttonCommonActiveBackgroud}
                    howayMethod={Tool.howayUndo}
                    icon={iconUndo === undefined ? undefined : iconUndo}
                    elem={'undo'}
                    noActive
                    tips={'撤销(CTRL+Z)'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <BtnCommon
                    focus={focus}
                    backgroud={commonButtonBackgroud}
                    activeBackgroud={buttonCommonActiveBackgroud}
                    howayMethod={Tool.howayRedo}
                    icon={iconRedo === undefined ? undefined : iconRedo}
                    elem={'redo'}
                    noActive
                    tips={'恢复(CTRL+Y)'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />

                {/* <BtnSelect styles={buttonFontSizeStyles}
                    howayMethod={Tool.howayForeColor}
                    focusElements={focusElements}
                    tips={'文字颜色'}
                    elem={'color'}
                    _key={'forecolor'}
                    options={[{ value: "red", title: "红" },
                    { value: "black", title: "黑" },
                    { value: "green", title: "绿" }, { value: "blue", title: "蓝" },
                    { value: "yellow", title: "黄" }]} /> */}
                <BtnColor
                    focusElements={focusElements}
                    tips={'文字颜色'}
                    elem={'#000000'}
                    mode={"forecolor"}
                    howayMethod={Tool.howayForeColor}
                    styles={BtnColorStyles} />
                <BtnColor
                    focusElements={focusElements}
                    mode={"backcolor"}
                    tips={'背景颜色'}
                    elem={'#FFFFFF'}
                    howayMethod={Tool.howayHiliteColor}
                    styles={BtnColorStyles} />
                <BtnCommon
                    focus={focus}
                    backgroud={commonButtonBackgroud}
                    activeBackgroud={buttonCommonActiveBackgroud}
                    howayMethod={Tool.howayRemoveFormat}
                    icon={iconDelete === undefined ? undefined : iconDelete}
                    elem={'remove'}
                    noActive
                    tips={'清除格式'}
                    styles={buttonCommonStyles}
                    focusElements={focusElements} />
                <br />
            </div>
        );
    }
}

ToolBar.defaultProps = {
    toolBarStyles: {
        background: "#E8EAF6",
        height: "auto",
        width: "99%",
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
    },
    BtnColorStyles: {
        width: 20, height: 20,
        cursor: "pointer", margin: 2,
        borderColor: '#EA80FC', float: "left",
        borderRadius: 4
    },
    iconBlod: iconBlod,
    iconItalic: iconItalic,
    iconStriket,
    iconUderline,
    iconImg,
    iconCenter,
    iconLeft,
    iconRight,
    iconFull,
    iconUndo,
    iconRedo,
    iconDelete,
}

export default ToolBar;