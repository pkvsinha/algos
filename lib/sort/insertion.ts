import util from "../util";

export default function insertion(array) {
  let N = array.length;
  for (let i = 1; i < N - 1; i++) {
    for (let j = i; j > 0 && array[j - 1] > array[j]; j--) {
      util.swap(array, j - 1, j);
    }
  }
}