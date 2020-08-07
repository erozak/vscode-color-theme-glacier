import type { ThemeMeta } from './types';
import type { TerminalColors } from './terminal';

export function makeTheme(
  meta: ThemeMeta,
  configs: {
    terminal: TerminalColors;
  },
): ThemeMeta & {
  terminal: TerminalColors;
} {
  return {
    ...configs,
    ...meta,
  };
}
