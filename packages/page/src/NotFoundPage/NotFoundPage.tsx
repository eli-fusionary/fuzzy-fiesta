import type { Metadata } from 'next'

import { ButtonLink } from '@local/ui/ButtonLink'
import { Divider } from '@local/ui/Divider'
import { Flex } from '@local/ui/Flex'
import { Heading } from '@local/ui/Heading'
import { Text } from '@local/ui/Text'

export const metadata: Metadata = {
  title: 'Page Not Found',
}

export const NotFoundPage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <Flex
        className="gap-6 rounded border border-divider bg-card px-4 py-8 shadow-2xl md:px-8 lg:px-24"
        direction="column"
      >
        <Heading as="h1" className="text-center">
          Page Not Found
        </Heading>
        <Text className="text-center">
          Sorry, the page you are looking for could not be found.
        </Text>
        <Divider />
        <Flex direction="row" justify="center">
          <ButtonLink href="/">Go Home</ButtonLink>
        </Flex>
      </Flex>
    </main>
  )
}
