import {Comparable, BaseSort} from './base';

// 选择排序
export default class Shell extends BaseSort {
    static sort(a: Comparable[]) {
        const n = a.length;
        let h = 1;
        while (h < n / 3) {
            h = h * 3 + 1;
        }
        while (h >= 1) {
            for (let i = h; i < n; i++) {
                let selected = a[i];
                let j;
                for (j = i; j >= h && a[j - h] > selected; j = j - h) {
                    // BaseSort.exch(a, j, j - h);
                    a[j] = a[j - h];
                }
                a[j] = selected;
            }
            h = Math.floor(h / 3);
        }
        BaseSort.show(a);
        BaseSort.isSorted(a);
    }
}

Shell.sort([2, 55, 14, 6, 98, 3]);
Shell.sort([34, 51, 5, 0, 3, -9, 45, 552]);
var b = ['a', '1eq', 'gr', 'zz', 'ft', 'bae'];
Shell.sort(b);
