"use strict";
exports.__esModule = true;
exports.BaseSort = void 0;
var BaseSort = /** @class */ (function () {
    function BaseSort() {
    }
    BaseSort.sort = function (a) { };
    BaseSort.less = function (v, w) {
        return v < w;
    };
    BaseSort.exch = function (a, i, j) {
        if (i === j) {
            return;
        }
        var t = a[i];
        a[i] = a[j];
        a[j] = t;
    };
    BaseSort.show = function (a) {
        console.log(a);
    };
    BaseSort.isSorted = function (a) {
        for (var i = 1; i < a.length; i++) {
            if (BaseSort.less(a[i], a[i - 1])) {
                console.log('❌ 排序错误:', a[i], '<', a[i - 1]);
                return false;
            }
        }
        console.log('✔️ 排序正确');
        return true;
    };
    return BaseSort;
}());
exports.BaseSort = BaseSort;
// const baseTest = BaseSort.isSorted([1, 2, 3, 0]);
// console.log('baseTest', baseTest);
