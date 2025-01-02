import type { FieldAccess, TypeWithID } from 'payload'

import type { Admin } from '@local/payload/payload-types'

export const AdminAccess: FieldAccess<TypeWithID, Admin> = ({
  req: { user },
}) => user?.role === 'admin'
