import util from "../util";

export default function insertion(array: any[]) {
  let N = array.length;
  for (let i = 1; i < N; i++) {
    for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
      util.swap(array, j - 1, j);
    }
  }
}

export function shell(array: any[]) {
  const N = array.length;
  let h = 1;
  while (h < N / 3) h = 3 * h + 1;
  while (h >= 1) {
    for (let i = h; i < N; i++) {
      for (let j = i; j >= h && array[j] < array[j - h]; j -= h) {
        util.swap(array, j - h, j);
      }
    }
    h = Math.floor(h / 3);
  }
}