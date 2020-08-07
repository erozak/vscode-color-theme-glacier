import { makeTheme } from '../makeTheme';
import { darkThemeTerminalColors } from './dark.terminal';

export const darkTheme = makeTheme(
  {
    name: 'Neo Glacier Dark',
    type: 'dark',
  },
  {
    terminal: darkThemeTerminalColors,
  },
);
