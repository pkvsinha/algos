import { swap } from "../util";

function digit(num: number, place: number) {
  return Math.floor((num % (place * 10)) / place);
}

export default function radix(array: number[]) {
  let N = array.length;
  let place = 1;
  let count = new Array(10).fill(0);
  let input = array
  while (place <= 100) {
    let output = new Array(input.length);
    for (let m of input) {
      let d = digit(m, place);
      count[d]++;
    }
    for (let i = 1; i < count.length; i++) {
      count[i] = count[i - 1] + count[i];
    }
    for (let i = N - 1; i >= 0; i--) {
      let d = digit(input[i], place);
      output[count[d] - 1] = input[i];
      count[d] -= 1;
    }
    place = place * 10;
    count = count.fill(0);
    input = output;
  }
  return input;
}