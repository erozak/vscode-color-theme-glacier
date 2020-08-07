import { isString } from '../isString';

describe('utils/isString', () => {
  it('can tell the source is a string', () => {
    expect(isString('test')).toBeTruthy();
    expect(isString('')).toBeTruthy();

    expect(isString(null)).toBeFalsy();
    expect(isString({})).toBeFalsy();
    expect(isString([])).toBeFalsy();
    expect(isString(undefined)).toBeFalsy();
    expect(isString(NaN)).toBeFalsy();
    expect(isString(15)).toBeFalsy();
    expect(isString(0)).toBeFalsy();
    expect(isString(Symbol('test'))).toBeFalsy();
    expect(isString(true)).toBeFalsy();
    expect(
      isString(function test() {
        return null;
      }),
    ).toBeFalsy();
  });
});
