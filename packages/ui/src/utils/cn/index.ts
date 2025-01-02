import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'

import { twMerge } from '@local/ui/utils/tailwind-merge'

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))
