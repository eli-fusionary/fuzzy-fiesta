import type { FC, ReactNode } from 'react'
import { match } from 'ts-pattern'

import type { Page } from '@local/payload/payload-types'
import { TextSectionBreak } from '@local/payload/components/TextSectionBreak'
import { replaceNullsWithUndefined } from '@local/payload/helpers/replaceNullsWithUndefined'

export type Blocks = Page['blocks']

export const BlockRenderer: FC<{
  blocks: Blocks
}> = ({ blocks }) => {
  return blocks?.map(data =>
    match(data)
      .returnType<ReactNode>()
      .with({ blockType: 'Text Section Break' }, props => (
        <TextSectionBreak
          key={props.id}
          {...replaceNullsWithUndefined(props)}
        />
      ))
      .exhaustive(),
  )
}
