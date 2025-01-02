import type { ComponentProps, ForwardRefRenderFunction, ReactNode } from 'react'
import { forwardRef } from 'react'

import { cn } from '@local/ui/cn'

import type {
  LeftSectionVariants,
  RightSectionVariants,
} from './Divider.variants'
import { leftSection, rightSection } from './Divider.variants'

type Never<T> = {
  [K in keyof T]: never
}

export type DividerProps = (
  | ({
      children: NonNullable<ReactNode>
      orientation?: 'horizontal'
    } & LeftSectionVariants &
      RightSectionVariants)
  | ({
      children?: never
      orientation: 'vertical'
    } & Never<LeftSectionVariants> &
      Never<RightSectionVariants>)
  | ({
      children?: never
      orientation?: 'horizontal'
    } & Never<LeftSectionVariants> &
      Never<RightSectionVariants>)
) &
  Omit<ComponentProps<'div'>, 'children'>

export const DividerInner: ForwardRefRenderFunction<
  HTMLDivElement,
  DividerProps
> = (
  { align, children, className, orientation = 'horizontal', ...props },
  ref,
) => {
  if (orientation === 'vertical') {
    return (
      <div
        className={cn(
          'mx-2 w-px place-self-stretch self-stretch bg-divider',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  }

  if (!children) {
    return (
      <div
        className={cn(
          'my-2 h-px place-self-stretch self-stretch bg-divider',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  }

  return (
    <div className={cn('flex flex-row items-center py-2')} ref={ref} {...props}>
      <div
        className={leftSection({
          align,
          className,
        })}
      />
      {children}
      <div
        className={rightSection({
          align,
          className,
        })}
      />
    </div>
  )
}

export const Divider = forwardRef(DividerInner)
