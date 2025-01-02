import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { Merriweather, Poppins } from 'next/font/google'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@local/ui/cn'

export type RootLayoutProps = {
  footer?: ReactNode
  head?: ReactNode
  header?: ReactNode
} & ComponentPropsWithoutRef<'div'>

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: '400',
})

export const RootLayout: FC<RootLayoutProps> = ({
  children,
  className,
  footer,
  head,
  header,
}) => (
  <html
    className={cn(
      'bg-background font-sans antialiased',
      merriweather.variable,
      poppins.variable,
      className,
    )}
    lang="en"
  >
    <head>{head}</head>
    <body>
      <div className="relative isolate flex min-h-svh w-full flex-col bg-background">
        {header}
        <Slot className="grow">{children}</Slot>
        {footer}
      </div>
    </body>
  </html>
)
