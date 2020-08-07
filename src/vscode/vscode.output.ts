import Color = require('color');
import { keys, assign, reduce } from 'lodash';

import type { VscodeColorThemeTokenColor, VscodeOutput } from './vscode.types';

import { isString, stringifyColor } from '../utils';
import { jsonStringify } from '../io';

interface ColorSettings {
  [key: string]: Color | string | ColorSettings;
}

function normalizeColors(
  colors: ColorSettings | undefined,
  pathes: string[] = [],
): Record<string, string> | null {
  if (!colors) return null;
  else {
    return reduce<string, Record<string, string>>(
      keys(colors),
      (records, key): Record<string, string> => {
        const value = colors[key];

        if (value) {
          if (isString(value) || value instanceof Color) {
            records[pathes.concat(key).join('.')] = stringifyColor(value, { alpha: true });
          } else assign(records, normalizeColors(value, pathes.concat(key)));
        }

        return records;
      },
      {},
    );
  }
}

function normalizeTokenColor(
  tokenColor: VscodeColorThemeTokenColor<Color | string>,
): VscodeColorThemeTokenColor {
  if (tokenColor.settings.foreground) {
    return {
      ...tokenColor,
      settings: {
        ...tokenColor.settings,
        foreground: stringifyColor(tokenColor.settings.foreground),
      },
    };
  } else return tokenColor as VscodeColorThemeTokenColor;
}

function normalizeTokenColors(
  colors?: VscodeColorThemeTokenColor<Color | string>[],
): VscodeColorThemeTokenColor[] {
  return colors?.map(normalizeTokenColor) ?? [];
}

export const vscodeOutput: VscodeOutput = function vscodeOutput(meta, theme, config) {
  const data = {
    ...meta,
    colors: normalizeColors(theme.colors as ColorSettings) || {},
    tokenColors: normalizeTokenColors(theme.tokenColors),
  };

  return jsonStringify(data, {
    prettierOptions: config?.prettierOptions,
  });
};
