import { mul } from './somelogic';

describe('somelogic test', () => {
  it('test mul fn', () => {
    expect(mul(1, 2, 3, 4)).toEqual(24);
  });
  it('another test', () => {
    expect(mul(1, 2)).toEqual(2);
  });
});
