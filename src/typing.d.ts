declare type ValueOf<T> = T[keyof T];

declare type PlainObj<
  T,
  K extends string | number | symbol = string | number | symbol
> = Record<K, T>;
