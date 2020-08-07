import { isObject } from '../isObject';

describe('utils/isObject', () => {
  it('can tell the source is an "object" type', () => {
    expect(isObject(null)).toBeTruthy();
    expect(isObject({})).toBeTruthy();
    expect(isObject([])).toBeTruthy();

    expect(isObject(undefined)).toBeFalsy();
    expect(isObject(NaN)).toBeFalsy();
    expect(isObject(15)).toBeFalsy();
    expect(isObject(0)).toBeFalsy();
    expect(isObject('')).toBeFalsy();
    expect(isObject(Symbol('test'))).toBeFalsy();
    expect(isObject('test')).toBeFalsy();
    expect(isObject(true)).toBeFalsy();
    expect(
      isObject(function test() {
        return null;
      }),
    ).toBeFalsy();
  });
});
