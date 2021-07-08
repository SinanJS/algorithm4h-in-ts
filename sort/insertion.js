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
// 插入排序 (改进版)
var Insertion = /** @class */ (function (_super) {
    __extends(Insertion, _super);
    function Insertion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Insertion.sort = function (a) {
        var n = a.length;
        for (var i = 1; i < n; i++) {
            var selected = a[i];
            var j = void 0;
            for (j = i; j > 0 && a[j - 1] > selected; j--) {
                a[j] = a[j - 1];
            }
            a[j] = selected;
        }
        // BaseSort.show(a);
        // BaseSort.isSorted(a);
    };
    return Insertion;
}(base_1.BaseSort));
exports["default"] = Insertion;
// Insertion.sort([2, 55, 14, 6, 98, 3]);
// var b = ['a', '1eq', 'gr', 'zz', 'ft', 'bae'];
// Insertion.sort(b);
