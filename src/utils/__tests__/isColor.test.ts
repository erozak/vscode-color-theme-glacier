import Color = require('color');

import { isColor } from '../isColor';

describe('utils/isColor', () => {
  it('can tell the source is an instance of Color', () => {
    expect(isColor(Color('#000'))).toBeTruthy();

    expect(isColor('test')).toBeFalsy();
    expect(isColor('')).toBeFalsy();
    expect(isColor(null)).toBeFalsy();
    expect(isColor({})).toBeFalsy();
    expect(isColor([])).toBeFalsy();
    expect(isColor(undefined)).toBeFalsy();
    expect(isColor(NaN)).toBeFalsy();
    expect(isColor(15)).toBeFalsy();
    expect(isColor(0)).toBeFalsy();
    expect(isColor(Symbol('test'))).toBeFalsy();
    expect(isColor(true)).toBeFalsy();
    expect(
      isColor(function test() {
        return null;
      }),
    ).toBeFalsy();
  });
});
