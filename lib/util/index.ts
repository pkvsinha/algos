const util = {
  isSorted(array: any[]) {

  },
  swap(array: any[], i: number, j: number) {
    let t = array[i];
    array[i] = array[j];
    array[j] = t;
  }
};

export default util;