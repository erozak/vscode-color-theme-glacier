import { defineTheme, ThemeType } from '../theme';
import { darkThemeTerminalColors } from './darkTheme.terminal';

export const darkTheme = defineTheme('Neo Glacier Dark', ThemeType.DARK, {
  terminal: darkThemeTerminalColors,
});
