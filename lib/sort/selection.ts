import util from '../util';

export function selection(array: any[]) {
  const N = array.length;
  for (let i = 0; i < N - 1; i++) {
    let min = i;
    for (let j = i + 1; j < N; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    util.swap(array, i, min);
  }
}