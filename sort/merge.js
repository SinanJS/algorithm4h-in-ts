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
var MergeSort = /** @class */ (function (_super) {
    __extends(MergeSort, _super);
    function MergeSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MergeSort.merge = function (a, lo, mid, hi) {
        var i = lo;
        var j = mid + 1;
        var aux = [];
        for (var k = lo; k <= hi; k++) {
            aux.push(a[k]);
        }
        for (var k = lo; k <= hi; k++) {
            // 左半边用尽，取右半边元素
            if (i > mid) {
                a[k] = aux[j];
                j++;
            }
            else if (j > hi) {
                // 右半边用尽，取左半边元素
                a[k] = aux[i];
                i++;
            }
            else if (aux[i] <= aux[j]) {
                // 左边<=右边，取左半边元素（取小的）
                a[k] = aux[i];
                i++;
            }
            else if (aux[i] > aux[j]) {
                // 左边>右边，取右半边元素（取小的）
                a[k] = aux[j];
                j++;
            }
        }
    };
    MergeSort.sort = function (a) {
        MergeSort.sortMerge(a, 0, a.length - 1);
    };
    // 自顶向上的归并排序
    MergeSort.sortMerge = function (a, lo, hi) {
        if (lo >= hi) {
            return;
        }
        var mid = lo + Math.floor((hi - lo) / 2);
        MergeSort.sortMerge(a, lo, mid);
        MergeSort.sortMerge(a, mid + 1, hi);
        MergeSort.merge(a, lo, mid, hi);
    };
    return MergeSort;
}(base_1.BaseSort));
exports["default"] = MergeSort;
var a = ['E', 'E', 'G', 'M', 'R', 'A', 'C', 'E', 'R', 'T'];
MergeSort.sort(a);
base_1.BaseSort.isSorted(a);
base_1.BaseSort.show(a);
