import Color from 'color';

import type { ColorValue } from '../types';

export type ThemeElement<K extends string> = Record<K, ColorValue>;

export enum ThemeType {
  DARK = 'dark',
  LIGHT = 'light',
  CONTRAST = 'contrast',
}

export type ThemeConfig = Record<string, unknown>;

export interface Theme {
  name: string;
  type: ThemeType;
  configs: Record<string, ThemeConfig>;
}

export function defineTheme(
  name: Theme['name'],
  type: Theme['type'],
  configs: Theme['configs'],
): Theme {
  return {
    name,
    type,
    configs,
  };
}

interface PaletteSet {
  main: ColorValue;
  light: ColorValue;
  dark: ColorValue;
}

type ThemeTerminalPalette = Record<
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'grey'
  | 'brightBlack'
  | 'brightRed'
  | 'brightGreen'
  | 'brightYellow'
  | 'brightBlue'
  | 'brightMagenta'
  | 'brightCyan'
  | 'brightGrey',
  ColorValue
>;

type Actions =
  | 'active'
  | 'disabled'
  | 'focused'
  | 'hover'
  | 'inactive'
  | 'inactiveFocused'
  | 'selected';

export interface ThemePalette {
  black: ColorValue;
  white: ColorValue;
  background: ColorValue;
  primary: PaletteSet;
  secondary: PaletteSet;
  error: PaletteSet;
  warning: PaletteSet;
  info: PaletteSet;
  success: PaletteSet;
  text: Record<'primary' | 'secondary' | 'hint' | 'inactive' | 'disabled', ColorValue>;
  action: Record<Actions, ColorValue>;
  terminal: ThemeTerminalPalette;
}

export type ThemeOpacity = Record<Actions, number>;
