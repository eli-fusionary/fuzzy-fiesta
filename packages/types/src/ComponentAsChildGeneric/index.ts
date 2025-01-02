import type { ReactNode } from 'react'

export type ComponentAsChildGeneric<TDefault extends object = object> =
  | { asChild: true; children: NonNullable<ReactNode> }
  | ({
      asChild?: false
    } & TDefault)
