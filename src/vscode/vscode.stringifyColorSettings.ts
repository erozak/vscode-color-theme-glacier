import Color = require('color');

import { stringifyColor, flatObject, filterValues } from '../utils';

export interface ColorSettings {
  [key: string]: Color | string | ColorSettings | undefined;
}

export function stringifyColorSettings(
  colors: ColorSettings | undefined,
): Record<string, string> {
  if (colors) {
    return filterValues(
      flatObject(colors, (value: string | Color | undefined) =>
        value
          ? stringifyColor(value, {
              alpha: true,
            })
          : null,
      ),
      Boolean,
    );
  } else return {};
}
