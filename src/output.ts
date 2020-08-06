import { writeFile, mkdir } from 'fs';
import { isEmpty, kebabCase } from 'lodash';
import { join as joinPath } from 'path';
import prettier = require('prettier');
import Color = require('color');

import type { VsCodeColorTheme } from './vscode';

import { buildColorThemeJson } from './buildColorThemeJson';

function makeFolder(path: string): Promise<boolean> {
  return new Promise((resolve, reject) =>
    mkdir(path, error => (error ? reject(error) : resolve(true))),
  );
}

function writeThemeFile(path: string, data: string): Promise<boolean> {
  if (isEmpty(data)) return Promise.resolve(false);
  else {
    return new Promise((resolve, reject) =>
      writeFile(
        path,
        data,
        {
          flag: 'w',
        },
        error => (error ? reject(error) : resolve(true)),
      ),
    );
  }
}

async function outputTheme(
  path: string,
  theme: VsCodeColorTheme<Color | string>,
  options: {
    prettierOptions?: prettier.Options | null;
  } = {},
): Promise<boolean> {
  let data: string;
  try {
    data = JSON.stringify(buildColorThemeJson(theme));

    if (options.prettierOptions) {
      data = prettier.format(data, {
        ...options.prettierOptions,
        parser: 'json-stringify',
      });
    }
  } catch (error) {
    return false;
  }

  return await writeThemeFile(path, data);
}

export interface OutputThemeConfig {
  path?: string;
  prettierOptions?: prettier.Options | null;
}

async function outputThemes(
  themes: VsCodeColorTheme<Color | string>[],
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
    themes: VsCodeColorTheme<Color | string>[];
    prettierConfigPath: string;
  } & Omit<OutputThemeConfig, 'prettierOptions'>,
): Promise<void> {
  const { themes, prettierConfigPath, path, ...outputConfig } = config;

  if (path) await makeFolder(path);

  await outputThemes(themes, {
    ...outputConfig,
    path,
    prettierOptions: await prettier.resolveConfig(prettierConfigPath),
  });
}
