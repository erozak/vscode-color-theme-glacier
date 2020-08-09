import Color = require('color');

export type VscodeElement<K extends string> = Partial<Record<K, Color>>;

export type TextColors = VscodeElement<
  'primary' | 'secondary' | 'hint' | 'inactive' | 'disabled'
>;

export type VscodeLinkColors = VscodeElement<'inactive' | 'active'>;

export type VscodeButtonColors = VscodeElement<
  'foreground' | 'background' | 'hoverBackground'
>;

export type BadgeColors = VscodeElement<'foreground' | 'background'>;

export type SeverityColors = VscodeElement<'warning' | 'error' | 'info' | 'success'>;

export type OperationColors = VscodeElement<
  | 'confliction'
  | 'insertion'
  | 'deletion'
  | 'ingore'
  | 'modification'
  | 'untrack'
  | 'submodule'
>;

export type PaneColors = VscodeElement<'border' | 'foreground' | 'background'>;

export type TokenColors = VscodeElement<
  'boolean' | 'error' | 'name' | 'number' | 'string' | 'value'
>;

export type CursorColors = VscodeElement<'forground' | 'background'>;

export type ContrastColors = VscodeElement<'border' | 'activeBorder'>;

export type TerminalColors = PaneColors &
  VscodeElement<
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
