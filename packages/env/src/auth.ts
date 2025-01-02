import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import { skipValidation } from '@local/env/helpers/skipValidation'

export const env = createEnv({
  emptyStringAsUndefined: true,

  experimental__runtimeEnv: {},
  server: {
    AUTH_SECRET: z.string(),
  },
  skipValidation,
})
