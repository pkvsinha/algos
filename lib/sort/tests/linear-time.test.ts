import { expect } from "chai";
import counting from "../counting"
import radix from "../radix";

describe('Counting sort test', () => {
  [
    [9, 3, 1, 3, 8, 9, 4, 5],
    [2, 4, 5, 1, 5, 6, 1, 0, 1, 0, 1, 9, 1]
  ]
  .forEach((array) => {
    it(`should sort the array: ${array}`, () => {
      expect(counting(array)).to.eql([...array].sort((a,  b) => a - b));
    })
  })
});

describe('Counting sort with different max', () => {
  [
    [[0, 15], [9, 13, 12, 15, 8, 1, 4, 11, 9, 14, 15, 2, 8, 9, 12, 10]],
    [[0, 20], [2, 4, 5, 1, 5, 6, 1, 0, 1, 0, 1, 9, 1, 12, 17, 18, 9, 19, 20, 17, 16, 3, 1, 9, 7, 13, 11, 12, 5, 15]]
  ]
  .forEach((data) => {
    const [[min, max], array] = data;
    it(`should sort the array: ${array}`, () => {
      expect(counting(array, max)).to.eql([...array].sort((a,  b) => a - b));
    })
  })
});

describe('Radix sort with different max', () => {
  [
    [345, 231, 902, 900, 123],
    [123, 145, 156, 113, 980, 121, 415, 718, 768, 972, 341, 872, 176, 128],
    [54, 12, 464, 233, 992, 91, 3, 12, 1, 323, 938, 89, 123],
    [65, 23, 23, 56, 23, 78, 232, 44, 12, 903, 15, 883, 901, 12, 453]
  ]
  .forEach((array) => {
    it(`should sort the array: ${array}`, () => {
      expect(radix(array)).to.eql([...array].sort((a,  b) => a - b));
    })
  })
});