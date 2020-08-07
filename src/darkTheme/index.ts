import { makeTheme } from '../makeTheme';
import { darkThemeTerminalColors } from './darkTheme.terminal';

export const darkTheme = makeTheme(
  {
    name: 'Neo Glacier Dark',
    type: 'dark',
  },
  {
    terminal: darkThemeTerminalColors,
  },
);
