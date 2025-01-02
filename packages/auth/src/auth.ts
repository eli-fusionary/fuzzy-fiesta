import type { DefaultSession } from 'next-auth'
import type { Provider } from 'next-auth/providers'
import NextAuth from 'next-auth'

import type { UserType } from '@local/auth/types'
import { env } from '@local/env/app'

const providers: Provider[] = []

export const {
  auth,
  handlers,
  signIn,
  signOut,
  unstable_update: update,
} = NextAuth({
  callbacks: {
    jwt: props => {
      const { token, trigger, user } = props

      const session = props.session as {
        user?: DefaultSession['user'] & UserType
      }

      switch (trigger) {
        case 'signIn':
        case 'signUp': {
          return {
            ...token,
            user: {
              ...user,
            },
          }
        }
        case undefined: {
          return token
        }
        case 'update': {
          if (session.user) {
            const givenName =
              session.user.givenName?.trim() ??
              token.user?.givenName?.trim() ??
              ''
            const familyName =
              session.user.familyName?.trim() ??
              token.user?.familyName?.trim() ??
              ''
            const name = `${givenName} ${familyName}`.trim()

            return {
              ...token,
              name,
              user: {
                ...user,
                ...session.user,
                familyName,
                givenName,
                name,
              },
            }
          }

          return {
            ...token,
            user: {
              ...user,
            },
          }
        }
      }

      return null
    },
    session: props => {
      const { session, token } = props

      const response = {
        ...session,
        user: {
          ...session.user,
          familyName: token.user?.familyName,
          givenName: token.user?.givenName,
        },
      }

      return response
    },
  },
  debug: env.NEXT_PUBLIC_APP_ENV !== 'production',
  providers,
  session: {
    maxAge: 7 * 24 * 60 * 60,
    strategy: 'jwt',
  },
  trustHost: true,
})
