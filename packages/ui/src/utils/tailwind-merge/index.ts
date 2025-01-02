import { extendTailwindMerge } from 'tailwind-merge'

import { ExtendedConfig } from '@local/tailwind-config'

const getExtendedConfigKeys = (): Record<string, string[]> => {
  const mapKey = (key: string): string | undefined => {
    switch (key) {
      case 'borderRadius':
      case 'colors':
      case 'spacing': {
        return key
      }
      default: {
        return undefined
      }
    }
  }

  return Object.entries(ExtendedConfig).reduce((current, [key, value]) => {
    const mappedKey = mapKey(key)

    if (!mappedKey) {
      return current
    }

    return {
      ...current,
      [mappedKey]: Object.keys(value),
    }
  }, {})
}

const getClassGroups = () => {
  const getCssProperty = (key: string): string | undefined => {
    switch (key) {
      case 'fontFamily': {
        return 'font-family'
      }
      case 'fontSize': {
        return 'font-size'
      }
      default: {
        return undefined
      }
    }
  }

  const mapKey = (key: string): string | undefined => {
    switch (key) {
      case 'fontFamily': {
        return 'font'
      }
      case 'fontSize': {
        return 'text'
      }
      default: {
        return undefined
      }
    }
  }

  return Object.entries(ExtendedConfig).reduce((current, [key, value]) => {
    const prop = getCssProperty(key)
    const mappedKey = mapKey(key)

    if (!prop || !mappedKey) {
      return current
    }

    return {
      ...current,
      [prop]: [{ [mappedKey]: Object.keys(value as Record<string, unknown>) }],
    }
  }, {})
}

export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      ...getClassGroups(),
    },
    theme: {
      ...getExtendedConfigKeys(),
    },
  },
  prefix: undefined,
})
