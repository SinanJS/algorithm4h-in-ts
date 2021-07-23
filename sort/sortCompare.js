"use strict";
exports.__esModule = true;
var insertion_1 = require("./insertion");
var selectionSort_1 = require("./selectionSort");
var shell_1 = require("./shell");
var SortCompare = /** @class */ (function () {
    function SortCompare() {
    }
    SortCompare.time = function (alg, a) {
        var start = new Date().getTime();
        // console.time(alg);
        switch (alg) {
            case 'Insertion':
                insertion_1["default"].sort(a);
                break;
            case 'Selection':
                selectionSort_1["default"].sort(a);
                break;
            case 'Shell':
                shell_1["default"].sort(a);
                break;
            default:
                break;
        }
        var end = new Date().getTime();
        // console.timeEnd(alg);
        // console.log('eb', end - start);
        return end - start;
    };
    // 使用 alg 算法将 T 个长度为 N 的数组排序
    SortCompare.timeRandomInput = function (alg, N, T) {
        var total = 0;
        var a = new Array(N);
        for (var t = 0; t < T; t++) {
            for (var i = 0; i < N; i++) {
                a[i] = Math.floor(Math.random() * 1000);
            }
            total += SortCompare.time(alg, a);
        }
        return total;
    };
    SortCompare.prototype.main = function () {
        var N = 10000;
        var T = 100;
        var t1 = SortCompare.timeRandomInput('Insertion', N, T);
        var t2 = SortCompare.timeRandomInput('Selection', N, T);
        var t3 = SortCompare.timeRandomInput('Shell', N, T);
        console.log('插入排序总用时', t1);
        console.log('选择排序总用时', t2);
        console.log('希尔排序总用时', t3);
        // console.log('比值', t2 / t1);
    };
    return SortCompare;
}());
var sc = new SortCompare();
sc.main();
