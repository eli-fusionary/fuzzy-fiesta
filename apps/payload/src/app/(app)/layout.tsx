import type { Metadata } from 'next'

import '@local/themes/default.css'
import '@local/ui/styles.css'
import './globals.css'

export const metadata: Metadata = {
  description:
    'Boilerplate for creating a new Fusionary project using Next.js and TypeScript.',
  title: {
    default: '',
    template: '%s | Fusionary Template',
  },
}

export { RootLayout as default } from '@local/layout/RootLayout'
