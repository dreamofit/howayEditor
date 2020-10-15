//加粗
const howayBold = () => {
    return document.execCommand('bold', false);
}
//斜体
const howayItalic = () => {
    return document.execCommand('Italic', 'false', null)
}
//下划线
const howayUnderline = () => {
    return document.execCommand('Underline', false)
}
//字体大小
const howayFontSize = (param) => {
    return document.execCommand('FontSize', false, param)
}
//插入html
const howayInsertHtml = (param) => {
    return document.execCommand('inserthtml', false, param);
}

const howayJustifyCenter = ()=>{
    return document.execCommand('justifyCenter',false);
}

const howayJustifyLeft =()=>{
    return document.execCommand('justifyLeft',false);
}
const howayJustifyRight =()=>{
    return document.execCommand('justifyRight',false);
}

const howayJustifyFull=()=>{
    return document.execCommand('justifyFull',false);
}

//修改字体颜色
const howayForeColor = (param) => {
    return document.execCommand('foreColor', false, param);
}
const howayHiliteColor =(param)=>{
    return document.execCommand('hiliteColor', false, param);
}
const howayFontName = (param) => {
    return document.execCommand('fontName',false,param);
}
const howayUndo = () => {
    return document.execCommand('undo', false);
}
const howayRedo = () => {
    return document.execCommand('redo', false)
}
const howayFormatBlock =(param)=> {
    return document.execCommand('formatBlock',false,param);
}

const howayStrikeThrough =()=>{
    return document.execCommand('strikeThrough',false);
}

//直接执行命令
const howayCommand = (aCommandName, aShowDefaultUI, aValueArgument) => {
    return document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)
}

const Tool = {
    howayBold,
    howayItalic,
    howayUnderline,
    howayFontSize,
    howayInsertHtml,
    howayForeColor,
    howayFontName,
    howayUndo,
    howayRedo,
    howayFormatBlock,
    howayStrikeThrough,
    howayJustifyCenter,
    howayJustifyLeft,
    howayJustifyRight,
    howayJustifyFull,
    howayHiliteColor
}

export {
    Tool,
    howayCommand
}