import {Comparable} from './base';
import Insertion from './insertion';
import Selection from './selectionSort';
import Shell from './shell';
import MergeSort from './merge';

class SortCompare {
    static time(alg: string, a: Comparable[]) {
        const start = new Date().getTime();
        // console.time(alg);
        switch (alg) {
            case 'Insertion':
                Insertion.sort(a);
                break;
            case 'Selection':
                Selection.sort(a);
                break;
            case 'Shell':
                Shell.sort(a);
                break;
            case 'Merge':
                MergeSort.sort(a);
                break;
            default:
                break;
        }
        const end = new Date().getTime();
        // console.timeEnd(alg);
        // console.log('eb', end - start);
        return end - start;
    }

    // 使用 alg 算法将 T 个长度为 N 的数组排序
    static timeRandomInput(alg: string, N: number, T: number) {
        let total = 0;
        let a = new Array(N);
        for (let t = 0; t < T; t++) {
            for (let i = 0; i < N; i++) {
                a[i] = Math.floor(Math.random() * 1000);
            }
            total += SortCompare.time(alg, a);
        }
        return total;
    }

    main() {
        let N = 10000;
        let T = 100;
        const t1 = SortCompare.timeRandomInput('Insertion', N, T);
        const t2 = SortCompare.timeRandomInput('Selection', N, T);
        const t3 = SortCompare.timeRandomInput('Shell', N, T);
        const t4 = SortCompare.timeRandomInput('Merge', N, T);
        console.log('插入排序总用时', t1);
        console.log('选择排序总用时', t2);
        console.log('希尔排序总用时', t3);
        console.log('自顶向上的归并排序总用时', t4);
        // console.log('比值', t2 / t1);
    }

}

const sc = new SortCompare();
sc.main();
