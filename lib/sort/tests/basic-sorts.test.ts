import { expect } from "chai";
import insertion, { shell } from "../insertion";
import { selection } from "../selection";

describe('Elementary sorting', () => {
  [
    [9, 3, 1, 3, 8, 9, 4, 5],
    [2,3,12,4,54,1,34,6,0,234],
    [45,2,3,41,54,56,67,88,32,1,5,64,67],
    [2, 4, 5, 1, 5, 6, 1, 0, 1, 0, 1, 9, 1,23,112,2],
    [23,1,21,23,32,664,2,12,67,53,112,6,6,3,7,3,53,22,12,6,4,23,66,53,12,354,66,321,34,77,334,146,5643,56,234,245,674]
  ].forEach((array) => {
    it(`Insertion sort should sort the array: ${array}`, () => {
      const result = [...array].sort((a,  b) => a - b);
      insertion(array);
      expect(array).to.eql(result);
    })

    it(`Selection sort should sort the array: ${array}`, () => {
      const result = [...array].sort((a,  b) => a - b);
      selection(array);
      expect(array).to.eql(result);
    })

    it(`Shell sort should sort the array: ${array}`, () => {
      const result = [...array].sort((a,  b) => a - b);
      shell(array);
      expect(array).to.eql(result);
    })
  })  
});
