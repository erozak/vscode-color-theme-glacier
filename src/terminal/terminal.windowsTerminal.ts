import Color = require('color');

import type { TerminalColorsOutput, TerminalColors } from './terminal.model';

import { stringifyColor } from '../utils';
import { jsonStringify } from '../io';

export const windowsTerminalOuput: TerminalColorsOutput = function windowsTerminalOuput(
  meta,
  colors,
  config,
) {
  const data: Record<string, unknown> = {
    ...meta,
    ...([
      'black',
      'red',
      'green',
      'yellow',
      'blue',
      'purple',
      'cyan',
      'white',
      'brightBlack',
      'brightRed',
      'brightGreen',
      'brightYellow',
      'brightBlue',
      'brightPurple',
      'brightCyan',
      'brightWhite',
    ] as Array<keyof TerminalColors>).reduce((result, key) => {
      const value = colors[key] as string | Color;

      const color = value ? stringifyColor(value) : '';
      if (color.length > 0) result[key] = color;

      return result;
    }, {} as Record<string, string>),
  };

  return jsonStringify(data, {
    prettierOptions: config?.prettierOptions,
  });
};
