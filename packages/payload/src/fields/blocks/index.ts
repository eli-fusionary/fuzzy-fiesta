import type { BlocksField as PayloadBlocksField } from 'payload'
import { deepMerge } from 'payload'

import { TextSectionBreakBlock } from '@local/payload/blocks/TextSectionBreak'

export type BlocksFieldOverrides = {
  blocksOverrides?: Partial<PayloadBlocksField>
}

type BlocksField = (overrides?: BlocksFieldOverrides) => [PayloadBlocksField]

export const blocks = [TextSectionBreakBlock]

export const blocksField: BlocksField = (overrides = {}) => {
  const { blocksOverrides = {} } = overrides

  const blocksField = deepMerge<PayloadBlocksField>(
    {
      blocks,
      name: 'blocks',
      type: 'blocks',
    },
    blocksOverrides,
  )

  return [blocksField]
}
