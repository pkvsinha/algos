import { expect } from 'chai';
import heap from '../heap';

describe('Heap Sort', () => {
  [
    [3, 4, 9],
    [2, 5, 78, 23],
    [24, 13, 23, 11, 2, 9, 12, 14, 1, 3],
    [34, 55, 45, 23, 5, 22, 12, 56, 788, 21, 34, 232, 64, 52]
  ].forEach((array) => {
    it("should do in place sorting", () => {
      const sorted = [...array].sort((a,  b) => a - b);
      heap(array);
      expect(array).to.eql(sorted);
    })
  });
});
