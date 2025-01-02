'use client'

import type { FC, ReactElement, ReactNode } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { MinusIcon, PlusIcon } from 'lucide-react'

import type { Heading } from '@local/ui/Heading'
import type { Text } from '@local/ui/Text'
import { cn } from '@local/ui/cn'
import { Flex } from '@local/ui/Flex'

export type AccordionProps = {
  children?: ReactNode
  title: ReactElement<typeof Heading> | ReactElement<typeof Text>
  topBorder?: boolean
}

export const Accordion: FC<AccordionProps> = ({
  children,
  title,
  topBorder,
}) => {
  const border = topBorder ? 'border-t-2 border-divider' : ''
  return (
    <Flex className="gap-sm">
      <Disclosure>
        {({ open }) => (
          <>
            <DisclosureButton
              className={cn(
                'flex w-full justify-between gap-md pt-md text-start',
                border,
              )}
            >
              {title}

              {open ? (
                <MinusIcon className="size-6 shrink-0 origin-center" />
              ) : (
                <PlusIcon className="size-6 shrink-0 origin-center" />
              )}
            </DisclosureButton>
            <DisclosurePanel>{children}</DisclosurePanel>
          </>
        )}
      </Disclosure>
    </Flex>
  )
}
