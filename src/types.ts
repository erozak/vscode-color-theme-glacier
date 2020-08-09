import Color = require('color');

// types

export type ColorValue = Color | string;
export type PlainObj<
  T,
  K extends string | number | symbol = string | number | symbol
> = Record<K, T>;

// utils

export type ValueOf<T> = T[keyof T];

export type Element<K extends string> = Partial<Record<K, ColorValue>>;

export type ThemeType = 'dark' | 'light' | 'contrast';

export interface ThemeMeta {
  name: string;
  type: ThemeType;
}

export type Palette<K extends string | number> = Readonly<Record<K, ColorValue>>;

export interface OpacityParams {
  primaryText?: number;
  secondaryText?: number;
  hintText?: number;
  inactive?: number;
  disabled?: number;
  hover?: number;
  active?: number;
}

export function makeOpacityParams(values?: OpacityParams): Required<OpacityParams> {
  const DEFAULT_VALUE = 1;

  return Object.fromEntries(
    ([
      'primaryText',
      'secondaryText',
      'hintText',
      'inactive',
      'disabled',
      'hover',
      'active',
    ] as Array<keyof OpacityParams>).map(key => [key, values?.[key] ?? DEFAULT_VALUE]),
  ) as Required<OpacityParams>;
}
