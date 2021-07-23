"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_1 = require("./base");
// 选择排序
var Shell = /** @class */ (function (_super) {
    __extends(Shell, _super);
    function Shell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shell.sort = function (a) {
        var n = a.length;
        var h = 1;
        while (h < n / 3) {
            h = h * 3 + 1;
        }
        while (h >= 1) {
            for (var i = h; i < n; i++) {
                var selected = a[i];
                var j = void 0;
                for (j = i; j >= h && a[j - h] > selected; j = j - h) {
                    // BaseSort.exch(a, j, j - h);
                    a[j] = a[j - h];
                }
                a[j] = selected;
            }
            h = Math.floor(h / 3);
        }
        base_1.BaseSort.show(a);
        base_1.BaseSort.isSorted(a);
    };
    return Shell;
}(base_1.BaseSort));
exports["default"] = Shell;
Shell.sort([2, 55, 14, 6, 98, 3]);
Shell.sort([34, 51, 5, 0, 3, -9, 45, 552]);
var b = ['a', '1eq', 'gr', 'zz', 'ft', 'bae'];
Shell.sort(b);
