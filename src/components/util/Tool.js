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

//修改字体颜色
const howayForeColor = (param) => {
    return document.execCommand('foreColor', false, param);
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
}

export {
    Tool,
    howayCommand
}