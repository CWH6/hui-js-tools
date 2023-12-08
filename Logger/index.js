"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
};
var Logger = function () {
    // Add implementation later
};
Logger.typeColor = function (type) {
    var color = '';
    switch (type) {
        case 'primary':
            color = '#2d8cf0';
            break;
        case 'success':
            color = '#19be6b';
            break;
        case 'info':
            color = '#909399';
            break;
        case 'warn':
            color = '#ff9900';
            break;
        case 'error':
            color = '#f03f14';
            break;
        default:
            color = '#35495E';
            break;
    }
    return color;
};
Logger.print = function (type, text, back) {
    if (type === void 0) { type = 'default'; }
    if (back === void 0) { back = false; }
    if (typeof text === 'object') {
        // 如果是對象則調用打印對象方式
        isArray(text) ? console.table(text) : console.dir(text);
        return;
    }
    if (back) {
        // 如果是打印帶背景圖的
        console.log("%c ".concat(text, " "), "background:".concat(Logger.typeColor(type), "; padding: 2px; border-radius: 4px; color: #fff;"));
    }
    else {
        console.log("%c ".concat(text, " "), "border: 1px solid ".concat(Logger.typeColor(type), ";\n        padding: 2px; border-radius: 4px;\n        color: ").concat(Logger.typeColor(type), ";"));
    }
};
Logger.printBack = function (type, text) {
    if (type === void 0) { type = 'primary'; }
    this.print(type, text, true);
};
Logger.pretty = function (type, title, text) {
    if (type === void 0) { type = 'primary'; }
    if (typeof text === 'object') {
        console.group('Console Group', title);
        console.log("%c ".concat(title), "background:".concat(Logger.typeColor(type), ";border:1px solid ").concat(Logger.typeColor(type), ";\n        padding: 1px; border-radius: 4px; color: #fff;"));
        isArray(text) ? console.table(text) : console.dir(text);
        console.groupEnd();
        return;
    }
    console.log("%c ".concat(title, " %c ").concat(text, " %c"), "background:".concat(Logger.typeColor(type), ";border:1px solid ").concat(Logger.typeColor(type), ";\n      padding: 1px; border-radius: 4px 0 0 4px; color: #fff;"), "border:1px solid ".concat(Logger.typeColor(type), ";\n      padding: 1px; border-radius: 0 4px 4px 0; color: ").concat(Logger.typeColor(type), ";"), 'background:transparent');
};
Logger.prettyPrimary = function (title) {
    var _this = this;
    var text = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        text[_i - 1] = arguments[_i];
    }
    text.forEach(function (t) { return _this.pretty('primary', title, t); });
};
Logger.prettySuccess = function (title) {
    var _this = this;
    var text = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        text[_i - 1] = arguments[_i];
    }
    text.forEach(function (t) { return _this.pretty('success', title, t); });
};
Logger.prettyWarn = function (title) {
    var _this = this;
    var text = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        text[_i - 1] = arguments[_i];
    }
    text.forEach(function (t) { return _this.pretty('warn', title, t); });
};
Logger.prettyError = function (title) {
    var _this = this;
    var text = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        text[_i - 1] = arguments[_i];
    }
    text.forEach(function (t) { return _this.pretty('error', title, t); });
};
Logger.prettyInfo = function (title) {
    var _this = this;
    var text = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        text[_i - 1] = arguments[_i];
    }
    text.forEach(function (t) { return _this.pretty('info', title, t); });
};
exports.default = Logger;
