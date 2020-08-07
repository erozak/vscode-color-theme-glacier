import prettier = require('prettier');

import type { ThemeMeta } from '../types';

export interface OutputConfig {
  prettierOptions?: prettier.Options | null;
}

export interface ColorsOutput<C> {
  (meta: ThemeMeta, colors: C, config?: OutputConfig): string;
}
