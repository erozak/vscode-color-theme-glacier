import Color from 'color';

import type { Palette } from './types';

export const TRANSPARENT: Color = Color('#000000').alpha(0);

export const WHITE: Palette<700 | 500 | 300> = {
  [700]: Color('#dcdfe5'),
  [500]: Color('#f3f4f6'),
  [300]: Color('#ffffff'),
};

export const GREY: Palette<900 | 700 | 500 | 300 | 100> = {
  [900]: Color('121417'),
  [700]: Color('#23282e'),
  [500]: Color('#2e343c'),
  [300]: Color('#47505c'),
  [100]: Color('#6a788a'),
};

export const CYAN: Palette<700 | 500 | 300 | 100> = {
  [700]: Color('#90c2e0'),
  [500]: Color('#b9d9eb'),
  [300]: Color('#eff6fb'),
  [100]: Color('#ffffff'),
};

export const BLUE: Palette<700 | 500 | 300 | 100> = {
  [700]: Color('#163e50'),
  [500]: Color('#1f5872'),
  [300]: Color('#276f90'),
  [100]: Color('#3594c0'),
};

export const GREEN: Palette<700 | 500 | 300 | 100> = {
  [700]: Color('#37a965'),
  [500]: Color('#49c47a'),
  [300]: Color('#84d7a5'),
  [100]: Color('#a3e1bc'),
};

export const YELLOW: Palette<700 | 500 | 300 | 100> = {
  [700]: Color('#fa810f'),
  [500]: Color('#fb9435'),
  [300]: Color('#fcab5f'),
  [100]: Color('#fdca9b'),
};

export const RED: Palette<700 | 500 | 300 | 100> = {
  [700]: Color('#832129'),
  [500]: Color('#b02c38'),
  [300]: Color('#d24b57'),
  [100]: Color('#da6c75'),
};

export const MAGENTA: Palette<700 | 500 | 300 | 100> = {
  [700]: Color('#c74075'),
  [500]: Color('#9e2e5b'),
  [300]: Color('#d67199'),
  [100]: Color('#df90b0'),
};
