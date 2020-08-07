// eslint-disable-next-line @typescript-eslint/ban-types
export function isObject(source: unknown): source is object {
  return typeof source === 'object';
}
