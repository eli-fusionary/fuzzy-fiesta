import type { ComponentProps, FC } from 'react'
import { ChevronRightIcon } from 'lucide-react'

import { cn } from '@local/ui/cn'
import { Constrainer } from '@local/ui/Constrainer'
import { Flex } from '@local/ui/Flex'
import { Link } from '@local/ui/Link'
import { Section } from '@local/ui/Section'
import { Text } from '@local/ui/Text'

type Breadcrumb = {
  label: string
  link: string
}

export type PageHeaderBreadcrumbProps = {
  items?: Breadcrumb[]
  size?: 'default' | 'large'
} & ComponentProps<'div'>

export const PageHeaderBreadcrumb: FC<PageHeaderBreadcrumbProps> = ({
  className,
  items,
  size = 'default',
}) => {
  const separator = <ChevronRightIcon />

  return (
    <Section background="secondary">
      <Constrainer mode="defaultWithoutPadding">
        <Flex
          className={cn(
            'w-full px-4xl py-md max-lg:px-sm md:flex-row',
            size === 'default' ? 'h-[72px]' : 'h-[148px]',
            className,
          )}
          direction="column"
        >
          <Flex
            className="w-full gap-sm"
            direction="row"
            items={size === 'default' ? 'center' : 'start'}
          >
            {items?.map((item, index) => (
              <Flex
                className="items-center justify-center gap-sm text-sm"
                direction="row"
                key={`page-header-breadcrumb-item-${item.label}`}
              >
                {index > 0 && <span>{separator}</span>}
                {index === items.length - 1 ? (
                  <Text size="small">{item.label}</Text>
                ) : (
                  <Link
                    className="text-buttonSmall hover:underline"
                    href={item.link}
                  >
                    {item.label}
                  </Link>
                )}
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Constrainer>
    </Section>
  )
}
