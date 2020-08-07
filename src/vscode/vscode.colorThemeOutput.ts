import Color = require('color');

import type { VscodeColorThemeTokenColor, VscodeOutput } from './vscode.types';
import type { ColorSettings } from './vscode.stringifyColorSettings';

import { stringifyColor } from '../utils';
import { jsonStringify } from '../io';
import { stringifyColorSettings } from './vscode.stringifyColorSettings';

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

export const vscodeColorThemeOutput: VscodeOutput = function vscodeOutput(
  meta,
  theme,
  config,
) {
  const data = {
    ...meta,
    colors: stringifyColorSettings(theme.colors as ColorSettings),
    tokenColors: theme.tokenColors?.map(normalizeTokenColor) ?? [],
  };

  return jsonStringify(data, {
    prettierOptions: config?.prettierOptions,
  });
};
