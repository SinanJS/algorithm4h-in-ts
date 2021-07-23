import { Comparable, BaseSort } from './base';
export default class MergeSort extends BaseSort {

    static merge(a: Comparable[], lo: number, mid: number, hi: number) {
        let i = lo;
        let j = mid + 1;
        let aux = [];
        for (let k = lo; k <= hi; k++) {
            aux.push(a[k]);
        }
        for (let k = lo; k <= hi; k++) {
            // 左半边用尽，取右半边元素
            if (i > mid) {
                a[k] = aux[j];
                j++;
            } else if (j > hi) {
                // 右半边用尽，取左半边元素
                a[k] = aux[i];
                i++;
            } else if (aux[i] <= aux[j]) {
                // 左边<=右边，取左半边元素（取小的）
                a[k] = aux[i];
                i++;
            } else if (aux[i] > aux[j]) {
                // 左边>右边，取右半边元素（取小的）
                a[k] = aux[j];
                j++;
            }
        }
    }
    static sort(a: Comparable[]) {
        MergeSort.sortMerge(a, 0, a.length - 1);
    }
    // 自顶向上的归并排序
    static sortMerge(a: Comparable[], lo: number, hi: number) {
        if (lo >= hi) {
            return;
        }
        const mid = lo + Math.floor((hi - lo) / 2);
        MergeSort.sortMerge(a, lo, mid);
        MergeSort.sortMerge(a, mid + 1, hi);
        MergeSort.merge(a, lo, mid, hi);
    }
}

let a = ['E', 'E', 'G', 'M', 'R', 'A', 'C', 'E', 'R', 'T'];
MergeSort.sort(a);
BaseSort.isSorted(a);
BaseSort.show(a);