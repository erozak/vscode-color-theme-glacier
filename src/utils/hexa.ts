import Color = require('color');

export function hexa(color: Color): string {
  return `${color.hex()}${parseInt(
    Math.max(0, Math.min(color.alpha() * 255, 255)).toString(),
    16,
  )
    .toString()
    .padStart(2, '0')}`;
}
