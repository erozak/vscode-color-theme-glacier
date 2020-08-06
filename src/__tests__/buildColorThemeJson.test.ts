import Color = require('color');

import { buildColorThemeJson } from '../buildColorThemeJson';

describe('buildColorThemeJson', () => {
  it('can build a color-theme json', () => {
    expect(
      buildColorThemeJson({
        name: 'test',
        type: 'light',
        colors: {
          tab: {
            border: Color('#000000').alpha(0.12),
          },
        },
        tokenColors: [
          {
            name: 'test',
            scope: ['test'],
            settings: {
              fontStyle: 'italic',
              foreground: Color('#fe3'),
            },
          },
        ],
      }),
    ).toEqual({
      name: 'test',
      type: 'light',
      colors: {
        'tab.border': '#00000048',
      },
      tokenColors: [
        {
          name: 'test',
          scope: ['test'],
          settings: {
            fontStyle: 'italic',
            foreground: '#FFEE33',
          },
        },
      ],
    });
  });

  it('should ignore undefined properties', () => {
    expect(
      buildColorThemeJson({
        name: 'test',
        type: 'light',
        colors: {
          tab: {
            border: Color('#000'),
            activeBorder: undefined,
          },
        },
      }),
    ).toEqual({
      name: 'test',
      type: 'light',
      colors: {
        'tab.border': '#000000',
      },
      tokenColors: [],
    });
  });
});
