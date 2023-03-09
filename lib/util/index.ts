export function swap(array: any[], i: number, j: number) {
  let t = array[i];
  array[i] = array[j];
  array[j] = t;
}

export function isSorted(array: any[]) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i+1]) {
      return false;
    }
  }
  return true;
}

export function randomInt(max : number): number {
  return Math.floor(Math.random() * max);
}

export function randomArray(size : number, max = 100000): number[] {
  const array = new Array(size);
  for (let i = 0; i < size; i++) {
    array[i] = randomInt(max);
  }
  return array;
}

const util = {
  isSorted,
  swap
};

export default util;