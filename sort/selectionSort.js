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
var Selection = /** @class */ (function (_super) {
    __extends(Selection, _super);
    function Selection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Selection.sort = function (a) {
        var n = a.length;
        for (var i = 0; i < n; i++) {
            var min = i;
            for (var j = i + 1; j < n; j++) {
                if (Selection.less(a[j], a[min])) {
                    min = j;
                }
            }
            Selection.exch(a, i, min);
        }
        // Selection.show(a);
        // Selection.isSorted(a);
    };
    return Selection;
}(base_1.BaseSort));
exports["default"] = Selection;
// Selection.sort([2, 55, 14, 6, 98, 3]);
// var b = ['a', '1eq', 'gr', 'zz', 'ft', 'bae'];
// Selection.sort(b);
