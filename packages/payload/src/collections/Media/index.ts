import type { CollectionConfig } from 'payload'

import { EveryoneAccess } from '@local/payload/access/EveryoneAccess'
import { LoggedInAccess } from '@local/payload/access/LoggedInAccess'

export const Media: CollectionConfig<'media'> = {
  access: {
    create: LoggedInAccess,
    delete: LoggedInAccess,
    read: EveryoneAccess,
    update: LoggedInAccess,
  },
  admin: {
    group: 'Media',
  },
  fields: [
    {
      name: 'alt',
      required: true,
      type: 'text',
    },
  ],
  slug: 'media',
  upload: true,
}
