import type { Metadata } from 'next'

import '@local/themes/default.css'
import '@local/ui/styles.css'
import '../globals.css'

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
}

export { RootLayout as default } from '@local/layout/RootLayout'
