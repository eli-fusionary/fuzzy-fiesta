export type Prettify<T> = {
  [K in keyof T]: T[K] extends object ? Prettify<T[K]> : T[K]
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
} & unknown
