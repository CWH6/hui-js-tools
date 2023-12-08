const isArray = function (obj: any): boolean {
    return Object.prototype.toString.call(obj) === '[object Array]'
}

const Logger = () => {
  // Add implementation later
}

// 定义日志级别颜色
const typeColors = {
    'primary': '#2d8cf0',
    'success': '#19be6b',
    'info': '#909399',
    'warn': '#ff9900',
    'error': '#f03f14',
    'default': '#35495E'
};

Logger.typeColor = function (type: string) {
    return typeColors[type] || typeColors['default'];
}

Logger.print = function (type = 'default', text: any, back = false) {
    if (typeof text === 'object') {
        // 判断数据
        isArray(text) ? console.table(text) : console.dir(text)
        return
    }
    if (back) {
        // 带背景打印
        console.log(
            `%c ${text} `,
            `background:${Logger.typeColor(type)}; padding: 2px; border-radius: 4px; color: #fff;`
        )
    } else {
        console.log(
            `%c ${text} `,
            `border: 1px solid ${Logger.typeColor(type)};
        padding: 2px; border-radius: 4px;
        color: ${Logger.typeColor(type)};`
        )
    }
}

Logger.printBack = function (type = 'primary', text:string) {
    this.print(type, text, true)
}

Logger.pretty = function (type = 'primary', title:string, text:any) {
    if (typeof text === 'object') {
        console.group('Console Group', title)
        console.log(
            `%c ${title}`,
            `background:${Logger.typeColor(type)};border:1px solid ${Logger.typeColor(type)};
        padding: 1px; border-radius: 4px; color: #fff;`
        )
        isArray(text) ? console.table(text) : console.dir(text)
        console.groupEnd()
        return
    }
    console.log(
        `%c ${title} %c ${text} %c`,
        `background:${Logger.typeColor(type)};border:1px solid ${Logger.typeColor(type)};
      padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`,
        `border:1px solid ${Logger.typeColor(type)};
      padding: 1px; border-radius: 0 4px 4px 0; color: ${Logger.typeColor(type)};`,
        'background:transparent'
    )
}

Logger.primary = function (title:string, ...text:any) {
    text.forEach((t:any) => this.pretty('primary', title, t))
}

Logger.success = function (title:string, ...text:any) {
    text.forEach((t:any) => this.pretty('success', title, t))
}

Logger.warn = function (title:string, ...text:any) {
    text.forEach((t:any) => this.pretty('warn', title, t))
}

Logger.error = function (title:string, ...text:any) {
    text.forEach((t:any) => this.pretty('error', title, t))
}

Logger.info = function (title:string, ...text:any) {
    text.forEach((t:any) => this.pretty('info', title, t))
}

export default Logger
