import { swap } from "../util";

/**
 * 0   1  2   3  4  5   6  7   8  9  10
 * 32  12 10  4  76 8   1  12  1  34 9
 * 
 * lo' = 4 (76)
 * hi' = 10 (9)
 * 32  12 10  4  9 8   1  12  1  34 76
 * 
 * lo' = 9 (34)
 * hi' = 9 (34)
 * 
 * 32  12 10  4  9 8   1  12  1  34 76
 * 
 * 
 * @param array 
 * @param lo 
 * @param hi 
 * @returns 
 */
function partition(array: any[], lo: number, hi: number): number {
  const v = array[lo];
  let i = lo;
  let j = hi + 1;
  while (true) {
    while (array[++i] < v) if (i == hi) break;
    while (array[--j] > v) if (j == lo) break;
    if (i >= j) break;
    swap(array, i, j);
  }
  swap(array, lo, j);
  return j;
}

function sort_aux(array: any[], lo: number, hi: number) {
  if (hi <= lo) return;
  const j = partition(array, lo, hi);
  sort_aux(array, lo, j - 1);
  sort_aux(array, j + 1, hi);
}
export default function sort(array: any[]) {
  sort_aux(array, 0, array.length - 1);
}