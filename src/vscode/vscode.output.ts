import Color = require('color');

import type { VscodeColorThemeTokenColor, VscodeOutput } from './vscode.types';

import { stringifyColor, flatObject } from '../utils';
import { jsonStringify } from '../io';

interface ColorSettings {
  [key: string]: Color | string | ColorSettings;
}

function normalizeColors(colors: ColorSettings | undefined): Record<string, string> {
  if (colors) {
    return flatObject(colors, (value: string | Color) =>
      value ? stringifyColor(value, { alpha: true }) : null,
    );
  } else return {};
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

export const vscodeOutput: VscodeOutput = function vscodeOutput(meta, theme, config) {
  const data = {
    ...meta,
    colors: normalizeColors(theme.colors as ColorSettings),
    tokenColors: theme.tokenColors?.map(normalizeTokenColor) ?? [],
  };

  return jsonStringify(data, {
    prettierOptions: config?.prettierOptions,
  });
};
