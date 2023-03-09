import { heaps } from '@pkvsinha/ds';

/**
 * [9,7,2,8,1,23,6]
 * 
 * @param array array to be sorted in-place
 */
export default function heap(array: any[] & { heapSize?: number }) {
  heaps.util.heapify(array);
  let N = array.length;
  array.heapSize = N;
  while (N > 1) {
    heaps.util.swap(array, 0, N - 1);
    N--;
    array.heapSize = N;
    heaps.util.down(array, 0);
  }
}