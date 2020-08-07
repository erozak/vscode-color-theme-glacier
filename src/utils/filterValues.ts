export function filterValues<S extends PlainObj<unknown>>(
  source: S,
  predicator: (item: ValueOf<S>, key: keyof S, obj: S) => boolean,
): S {
  return Object.fromEntries(
    Object.entries(source).filter(([key, value]) =>
      predicator(value as ValueOf<S>, key, source),
    ),
  ) as S;
}
