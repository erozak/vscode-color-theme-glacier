export function filterValues<I, S extends PlainObj<I>>(
  source: S,
  predicator: (item: I, key: keyof S, obj: S) => boolean,
): S {
  return Object.fromEntries(
    Object.entries(source).filter(([key, value]) => predicator(value, key, source)),
  ) as S;
}
