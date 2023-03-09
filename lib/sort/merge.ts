import mergeTwoArrays from '../merge/2-arrays';

function merge(array: any[], lo1: number, hi1: number, lo2: number, hi2: number) {
  const mergedArray = mergeTwoArrays(array.slice(lo1, hi1 + 1), array.slice(lo2, hi2 + 1));
  let k = 0;
  for (let i = lo1; i <= hi1; i++) {
    array[i] = mergedArray[k++];
  }
  for (let i = lo2; i <= hi2; i++) {
    array[i] = mergedArray[k++];
  }
}

function sort_aux(array: any[], lo: number, hi: number) {
  if (lo >= hi) {
    return;
  }
  const mid = Math.floor((lo + hi) / 2);
  sort_aux(array, lo, mid);
  sort_aux(array, mid + 1, hi);
  merge(array, lo, mid, mid + 1, hi);
}

export default function sort(array: any[]) {
  sort_aux(array, 0, array.length - 1);
}