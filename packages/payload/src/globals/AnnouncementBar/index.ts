import type { GlobalConfig } from 'payload'

import { backgroundColorField } from '@local/payload/fields/backgroundColor'

export const AnnouncementBar: GlobalConfig = {
  admin: {
    group: 'Site Config',
  },
  fields: [
    {
      label: 'Enabled',
      name: 'isEnabled',
      type: 'checkbox',
    },
    ...backgroundColorField(),
  ],
  slug: 'announcement-bar',
}
