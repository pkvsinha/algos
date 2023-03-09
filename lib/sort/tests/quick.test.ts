import { expect } from 'chai';
import sort from '../quick';
import { isSorted, randomArray } from '../../util';

describe('Quick Sort', () => {
  [
    [3, 4, 9],
    [2, 5, 78, 23],
    [24, 13, 23, 11, 2, 9, 12, 14, 1, 3],
    [34, 55, 45, 23, 5, 22, 12, 56, 788, 21, 34, 232, 64, 52],
    randomArray(30, 100),
    randomArray(30, 100),
    randomArray(30, 100),
    randomArray(100, 1000),
    randomArray(100, 1000),
    randomArray(100, 1000)
  ].forEach((array) => {
    it(`should sort ${array} in place`, () => {
      sort(array);
      expect(isSorted(array), `${array} to be sorted`).to.eql(true);
    })
  });
});
