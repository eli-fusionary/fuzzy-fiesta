import type { CollectionConfig } from 'payload'
import {
  createBreadcrumbsField,
  createParentField,
} from '@payloadcms/plugin-nested-docs'

import { env } from '@local/env/payload'
import { AdminAccess } from '@local/payload/access/AdminAccess'
import { EveryoneAccess } from '@local/payload/access/EveryoneAccess'
import { blocksField } from '@local/payload/fields/blocks'
import { hideFromIndexingField } from '@local/payload/fields/hideFromIndexing'
import { publishedDateField } from '@local/payload/fields/publishedDate'
import { slugField } from '@local/payload/fields/slug'
import { titleField } from '@local/payload/fields/title'
import { PopulatePublishDateHook } from '@local/payload/hooks/PopulatePublishDateHook'
import { RevalidatePageHook } from '@local/payload/hooks/RevalidatePageHook'

export const Pages: CollectionConfig<'pages'> = {
  access: {
    create: AdminAccess,
    delete: AdminAccess,
    read: EveryoneAccess,
    update: AdminAccess,
  },
  admin: {
    defaultColumns: [
      'title',
      'pathname',
      'status',
      'updatedAt',
      'publishedDate',
    ],
    group: 'Content',
    livePreview: {
      url: ({ data }) => {
        if ('pathname' in data && typeof data.pathname === 'string') {
          return `${env.NEXT_PUBLIC_PAYLOAD_URL}${data.pathname}?isLivePreview=true`
        }

        return ''
      },
    },
    pagination: {
      defaultLimit: 25,
    },
    useAsTitle: 'title',
  },
  fields: [
    {
      tabs: [
        {
          fields: [
            ...titleField(),
            ...blocksField({ blocksOverrides: { label: 'Body Content' } }),
          ],
          label: 'Content',
        },
        {
          fields: [
            ...slugField(),
            createParentField('pages'),
            createBreadcrumbsField('pages'),
          ],
          label: 'Path Setup',
        },
      ],
      type: 'tabs',
    },
    ...publishedDateField(),
    ...hideFromIndexingField(),
  ],
  hooks: {
    afterChange: [RevalidatePageHook],
    beforeChange: [PopulatePublishDateHook],
  },
  slug: 'pages',
  versions: {
    drafts: {
      autosave: {
        interval: 300,
      },
    },
  },
}
