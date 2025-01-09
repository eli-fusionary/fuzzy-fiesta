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
      <div className="flex min-h-svh w-full flex-col bg-background">
        <div className="h-[32px] w-full overflow-x-hidden bg-background">
          <div className="h-1 w-[45%] animate-slide-left-to-right bg-brandPrimary ease-linear duration-2s repeat-infinite" />
        </div>
        <div className="size-[50px] animate-bounce rounded-full bg-brandPrimary" />
        {header}
        <Slot className="grow">{children}</Slot>
        {footer}
      </div>
    </body>
  </html>
)
