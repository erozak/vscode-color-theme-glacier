import Color = require('color');

import { isString } from './isString';
import { hexa } from './hexa';

export function stringifyColor(
  value: Color | string,
  options?: Partial<{
    alpha: boolean;
  }>,
): string {
  if (!value) return '';
  else if (isString(value)) return value;
  else if (options?.alpha) return hexa(value);
  else return value.hex();
}
