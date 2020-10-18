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
//居中
const howayJustifyCenter = ()=>{
    return document.execCommand('justifyCenter',false);
}
//左对齐
const howayJustifyLeft =()=>{
    return document.execCommand('justifyLeft',false);
}
//右对齐
const howayJustifyRight =()=>{
    return document.execCommand('justifyRight',false);
}
//两端对齐
const howayJustifyFull=()=>{
    return document.execCommand('justifyFull',false);
}

//修改字体颜色
const howayForeColor = (param) => {
    return document.execCommand('foreColor', false, param);
}
//修改背景颜色
const howayHiliteColor =(param)=>{
    return document.execCommand('hiliteColor', false, param);
}
//修改字体
const howayFontName = (param) => {
    return document.execCommand('fontName',false,param);
}
//撤销，后退
const howayUndo = () => {
    return document.execCommand('undo', false);
}
//恢复，前进
const howayRedo = () => {
    return document.execCommand('redo', false)
}
//段落
const howayFormatBlock =(param)=> {
    return document.execCommand('formatBlock',false,param);
}
//删除线
const howayStrikeThrough =()=>{
    return document.execCommand('strikeThrough',false);
}
//清除格式
const howayRemoveFormat =()=> {
    return document.execCommand('removeFormat',false);
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
    howayHiliteColor,
    howayRemoveFormat
}

export {
    Tool,
    howayCommand
}