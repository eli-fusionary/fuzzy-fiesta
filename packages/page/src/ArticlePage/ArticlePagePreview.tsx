'use client'

import type { FC } from 'react'
import { useRouter } from 'next/navigation'
import { RefreshRouteOnSave } from '@payloadcms/live-preview-react'

import { env } from '@local/env/payload'

export const ArticlePagePreview: FC = () => {
  const router = useRouter()

  return (
    <RefreshRouteOnSave
      refresh={() => {
        router.refresh()
      }}
      serverURL={env.NEXT_PUBLIC_PAYLOAD_URL}
    />
  )
}
