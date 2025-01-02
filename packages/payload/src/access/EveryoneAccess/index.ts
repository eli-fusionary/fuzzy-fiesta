import type { FieldAccess, TypeWithID } from 'payload'

import type { Admin } from '@local/payload/payload-types'

export const EveryoneAccess: FieldAccess<TypeWithID, Admin> = () => true
