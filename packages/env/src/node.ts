import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import { skipValidation } from '@local/env/helpers/skipValidation'

export const env = createEnv({
  emptyStringAsUndefined: true,

  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
  shared: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
  },
  skipValidation,
})
