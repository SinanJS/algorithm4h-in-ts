import { Comparable, BaseSort } from './base';

// ιζ©ζεΊ
export default class Selection extends BaseSort {
    static sort(a: Comparable[]) {
        const n = a.length;
        for (let i = 0; i < n; i++) {
            let min = i;
            for (let j = i + 1; j < n; j++) {
                if (Selection.less(a[j], a[min])) {
                    min = j;
                }
            }
            Selection.exch(a, i, min);
        }
        // Selection.show(a);
        // Selection.isSorted(a);
    }
}

// Selection.sort([2, 55, 14, 6, 98, 3]);
// var b = ['a', '1eq', 'gr', 'zz', 'ft', 'bae'];
// Selection.sort(b);
