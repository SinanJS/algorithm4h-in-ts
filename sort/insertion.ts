import { Comparable, BaseSort } from './base';

// 插入排序 (改进版)
export default class Insertion extends BaseSort {
    static sort(a: Comparable[]) {
        const n = a.length;
        for (let i = 1; i < n; i++) {
            let selected = a[i];
            let j;
            for (j = i; j > 0 && a[j - 1] > selected; j--) {
                a[j] = a[j - 1];
            }
            a[j] = selected;
        }
        // BaseSort.show(a);
        // BaseSort.isSorted(a);
    }
}

// Insertion.sort([2, 55, 14, 6, 98, 3]);
// var b = ['a', '1eq', 'gr', 'zz', 'ft', 'bae'];
// Insertion.sort(b);
