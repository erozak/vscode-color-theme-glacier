export function isString(source: unknown): source is string {
  return typeof source === 'string';
}
