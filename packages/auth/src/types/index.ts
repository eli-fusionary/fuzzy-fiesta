import 'next-auth/jwt'

import type { DefaultSession } from 'next-auth'

export type UserType = {
  familyName?: string
  givenName?: string
}

/* eslint-disable @typescript-eslint/consistent-type-definitions */
declare module 'next-auth' {
  export interface Session {
    user: DefaultSession['user'] & User
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface User extends UserType {}
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    user?: {
      sub?: string
    } & DefaultSession['user'] &
      UserType
  }
}
/* eslint-enable @typescript-eslint/consistent-type-definitions */
