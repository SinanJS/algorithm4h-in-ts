export type Comparable = number | string;

export class BaseSort {
    static sort(a: Comparable[]) { }

    static less(v: Comparable, w: Comparable): Boolean {
        return v < w;
    }

    static exch(a: Comparable[], i: number, j: number) {
        if (i === j) {
            return;
        }
        const t = a[i];
        a[i] = a[j];
        a[j] = t;
    }

    static show(a: Comparable[]) {
        console.log(a);
    }

    static isSorted(a: Comparable[]): Boolean {
        for (let i = 1; i < a.length; i++) {
            if (BaseSort.less(a[i], a[i - 1])) {
                console.log('❌ 排序错误:', a[i], '<', a[i - 1]);
                return false;
            }
        }
        console.log('✔️ 排序正确');
        return true;
    }
}
// const baseTest = BaseSort.isSorted([1, 2, 3, 0]);
// console.log('baseTest', baseTest);