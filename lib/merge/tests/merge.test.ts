import { expect } from "chai"
import merge from "../2-arrays"

describe('2 Way Array Merge', () => {
  it('should merge two sorted arrays', () => {
    expect(merge([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).to.eql([1, 2, 3, 3, 4, 4, 5, 5 , 6, 7]);
  })
})