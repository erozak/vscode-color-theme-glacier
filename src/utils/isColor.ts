import Color = require('color');

export function isColor(source: unknown): source is Color {
  return typeof source === 'object' && !!source && source instanceof Color;
}
