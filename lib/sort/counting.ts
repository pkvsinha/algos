export default function counting(array: number[], k = 10) {
  const count = new Array(k + 1).fill(0);
  for (let el of array) {
    count[el] += 1;
  }
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  const copy = new Array(array.length);
  for (let i = array.length - 1; i >= 0; i--) {
    const el = array[i];
    copy[count[el] - 1] = el;
    count[el] -= 1;
  }
  return copy;
}