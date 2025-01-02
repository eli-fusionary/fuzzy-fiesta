import type { FieldAccess, TypeWithID } from 'payload'

import type { Admin } from '@local/payload/payload-types'

export const LoggedInAccess: FieldAccess<TypeWithID, Admin> = ({
  req: { user },
}) => Boolean(user)
