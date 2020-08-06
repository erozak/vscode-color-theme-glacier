import Color = require('color');
import { isString, keys, assign, padStart, reduce } from 'lodash';

import type {
  VsCodeColorTheme,
  VsCodeColorThemeJson,
  VsCodeColorThemeTokenColor,
} from './vscode';

interface ColorSettings {
  [key: string]: Color | string | ColorSettings;
}

function stringifyColorValue(value: Color | string): string {
  if (isString(value)) return value;
  else if (value.alpha() >= 1) return value.hex();
  else {
    return `${value.hex()}${padStart(
      parseInt((value.alpha() * 255).toString(), 16).toString(),
      2,
      '0',
    )}`;
  }
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
            records[pathes.concat(key).join('.')] = stringifyColorValue(value);
          } else assign(records, normalizeColors(value, pathes.concat(key)));
        }

        return records;
      },
      {},
    );
  }
}

function normalizeTokenColor(
  tokenColor: VsCodeColorThemeTokenColor<Color | string>,
): VsCodeColorThemeTokenColor {
  if (tokenColor.settings.foreground) {
    return {
      ...tokenColor,
      settings: {
        ...tokenColor.settings,
        foreground: stringifyColorValue(tokenColor.settings.foreground),
      },
    };
  } else return tokenColor as VsCodeColorThemeTokenColor;
}

function normalizeTokenColors(
  colors?: VsCodeColorThemeTokenColor<Color | string>[],
): VsCodeColorThemeTokenColor[] {
  return colors?.map(normalizeTokenColor) ?? [];
}

export function buildColorThemeJson(
  theme: VsCodeColorTheme<Color | string>,
): VsCodeColorThemeJson {
  return {
    ...theme,
    colors: normalizeColors(theme.colors as ColorSettings) || {},
    tokenColors: normalizeTokenColors(theme.tokenColors),
  };
}
