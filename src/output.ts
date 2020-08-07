import { kebabCase } from 'lodash';
import { join as joinPath } from 'path';
import prettier = require('prettier');
import Color = require('color');

import type { VscodeColorTheme } from './vscode';

import { makeDirectory, writeFile, getPrettierOptions } from './io';
import { vscodeColorThemeOutput } from './vscode';

async function outputTheme(
  path: string,
  theme: VscodeColorTheme<Color | string>,
  options: {
    prettierOptions?: prettier.Options | null;
  } = {},
): Promise<boolean> {
  let data: string;
  try {
    data = vscodeColorThemeOutput({ name: theme.name, type: theme.type }, theme, options);
  } catch (error) {
    return false;
  }

  return await writeFile(path, data);
}

export interface OutputThemeConfig {
  path?: string;
  prettierOptions?: prettier.Options | null;
}

async function outputThemes(
  themes: VscodeColorTheme<Color | string>[],
  config: OutputThemeConfig = {},
): Promise<void> {
  const { path = process.cwd(), prettierOptions } = config;

  for (let i = 0; i < themes.length; i++) {
    const theme = themes[i];

    const filename = joinPath(path, `${kebabCase(theme.name)}.json`);

    console.info('Output theme [%s] to: %s', theme.name, filename);

    try {
      await outputTheme(filename, theme, {
        prettierOptions,
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export async function buildup(
  config: {
    themes: VscodeColorTheme<Color | string>[];
  } & Omit<OutputThemeConfig, 'prettierOptions'>,
): Promise<void> {
  const { themes, path, ...outputConfig } = config;

  if (path) await makeDirectory(path);

  await outputThemes(themes, {
    ...outputConfig,
    path,
    prettierOptions: await getPrettierOptions(),
  });
}
