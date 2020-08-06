import Color = require('color');

export type Palette<K extends string | number> = Readonly<Record<K, Color>>;

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

export type ColorDef<K extends string> = Readonly<Partial<Record<K, Color>>>;

export type TextColors = ColorDef<
  'primary' | 'secondary' | 'hint' | 'inactive' | 'disabled'
>;

export type LinkColors = ColorDef<'inactive' | 'active'>;

export type ButtonColors = ColorDef<'foreground' | 'background' | 'hoverBackground'>;

export type BadgeColors = ColorDef<'foreground' | 'background'>;

export type SeverityColors = ColorDef<'warning' | 'error' | 'info' | 'success'>;

export type OperationColors = ColorDef<
  | 'confliction'
  | 'insertion'
  | 'deletion'
  | 'ingore'
  | 'modification'
  | 'untrack'
  | 'submodule'
>;

export type PaneColors = ColorDef<'border' | 'foreground' | 'background'>;

export type TokenColors = ColorDef<
  'boolean' | 'error' | 'name' | 'number' | 'string' | 'value'
>;

export type CursorColors = ColorDef<'forground' | 'background'>;

export type ContrastColors = ColorDef<'border' | 'activeBorder'>;

export type TerminalColors = PaneColors &
  ColorDef<
    | 'black'
    | 'blue'
    | 'brightblack'
    | 'brightblue'
    | 'brightcyan'
    | 'brightgreen'
    | 'brightmagenta'
    | 'brightred'
    | 'brightwhite'
    | 'brightyellow'
    | 'cyan'
    | 'green'
    | 'magenta'
    | 'red'
    | 'white'
    | 'yellow'
  >;
