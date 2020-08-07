import { filterValues } from '../filterValues';

describe('utils/filterValues', () => {
  it('can filter the values', () => {
    const obj = {
      a: 1,
      b: -1,
    };
    const filtered = filterValues(obj, value => value > 0);
    expect(filtered).toEqual({ a: 1 });
    expect(filtered).not.toBe(obj);

    expect(filterValues({}, () => true)).toEqual({});
  });
});
