import { expect } from 'chai';
import sort from '../merge';
import { isSorted, randomArray } from '../../util';

describe('Merge Sort', () => {
  [
    [3, 4, 9],
    [2, 5, 78, 23],
    [24, 13, 23, 11, 2, 9, 12, 14, 1, 3],
    [34, 55, 45, 23, 5, 22, 12, 56, 788, 21, 34, 232, 64, 52],
    randomArray(30, 100),
    randomArray(100, 1000)
  ].forEach((array) => {
    it(`should sort ${array}`, () => {
      sort(array);
      expect(isSorted(array)).to.eql(true);
    })
  });
});
