import type { CollectionConfig } from 'payload'

import { AdminAccess } from '@local/payload/access/AdminAccess'
import { LoggedInAccess } from '@local/payload/access/LoggedInAccess'

export const Admins: CollectionConfig<'admins'> = {
  access: {
    create: AdminAccess,
    read: LoggedInAccess,
    update: AdminAccess,
  },
  admin: {
    group: 'Site Config',
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      access: {
        create: LoggedInAccess,
        read: LoggedInAccess,
        update: AdminAccess,
      },
      admin: {
        condition: (data, siblingData, { user }) => {
          if (!user) {
            return false
          }

          return data.id !== user.id
        },
      },
      defaultValue: 'user',
      hooks: {
        beforeChange: [
          async params => {
            const { operation, req } = params
            if (operation === 'create') {
              const count = await req.payload.count({ collection: 'admins' })
              if (count.totalDocs === 0) {
                return 'admin'
              }
            }
          },
        ],
      },
      name: 'role',
      options: [
        { label: 'Standard Admin', value: 'user' },
        { label: 'Super Admin', value: 'admin' },
      ],
      required: true,
      type: 'select',
    },
  ],
  slug: 'admins',
}
