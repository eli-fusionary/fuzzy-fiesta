import defaultTheme from 'tailwindcss/defaultTheme'

import type { ThemeConfig } from './types'

export const fontFamily: ThemeConfig['fontFamily'] = {
  sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
  serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
}

export const fontSize: ThemeConfig['fontSize'] = {
  body: [
    'var(--body-base-font-size)',
    {
      fontWeight: 'var(--body-base-font-weight)',
      letterSpacing: 'var(--body-base-letter-spacing)',
      lineHeight: '150%',
    },
  ],
  bodyExtraLarge: [
    'var(--body-xl-font-size)',
    {
      fontWeight: 'var(--body-xl-font-weight)',
      letterSpacing: 'var(--body-xl-letter-spacing)',
      lineHeight: '150%',
    },
  ],
  bodyExtraLargeLink: [
    'var(--body-xl-link-font-size)',
    {
      fontWeight: 'var(--body-xl-link-font-weight)',
      letterSpacing: 'var(--body-xl-link-letter-spacing)',
      lineHeight: '150%',
    },
  ],
  bodyExtraSmall: [
    'var(--body-xs-font-size)',
    {
      fontWeight: 'var(--body-xs-font-weight)',
      letterSpacing: 'var(--body-xs-letter-spacing)',
      lineHeight: '150%',
    },
  ],
  bodyExtraSmallLink: [
    'var(--body-xs-link-font-size)',
    {
      fontWeight: 'var(--body-xs-link-font-weight)',
      letterSpacing: 'var(--body-xs-link-letter-spacing)',
      lineHeight: '150%',
    },
  ],
  bodyLarge: [
    'var(--body-lg-font-size)',
    {
      fontWeight: 'var(--body-lg-font-weight)',
      letterSpacing: 'var(--body-lg-letter-spacing)',
      lineHeight: '150%',
    },
  ],
  bodyLargeLink: [
    'var(--body-lg-link-font-size)',
    {
      fontWeight: 'var(--body-lg-link-font-weight)',
      letterSpacing: 'var(--body-lg-link-letter-spacing)',
      lineHeight: '150%',
    },
  ],
  bodyLink: [
    'var(--body-base-link-font-size)',
    {
      fontWeight: 'var(--body-base-link-font-weight)',
      letterSpacing: 'var(--body-base-link-letter-spacing)',
      lineHeight: '150%',
    },
  ],
  bodySmall: [
    'var(--body-sm-font-size)',
    {
      fontWeight: 'var(--body-sm-font-weight)',
      letterSpacing: 'var(--body-sm-letter-spacing)',
      lineHeight: '150%',
    },
  ],
  bodySmallLink: [
    'var(--body-sm-link-font-size)',
    {
      fontWeight: 'var(--body-sm-link-font-weight)',
      letterSpacing: 'var(--body-sm-link-letter-spacing)',
      lineHeight: '150%',
    },
  ],
  button: [
    'var(--button-text-base-font-size)',
    {
      fontWeight: 'var(--button-text-base-font-weight)',
      letterSpacing: 'var(--button-text-base-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  buttonExtraLarge: [
    'var(--button-text-xl-font-size)',
    {
      fontWeight: 'var(--button-text-xl-font-weight)',
      letterSpacing: 'var(--button-text-xl-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  buttonExtraSmall: [
    'var(--button-text-xs-font-size)',
    {
      fontWeight: 'var(--button-text-xs-font-weight)',
      letterSpacing: 'var(--button-text-xs-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  buttonLarge: [
    'var(--button-text-lg-font-size)',
    {
      fontWeight: 'var(--button-text-lg-font-weight)',
      letterSpacing: 'var(--button-text-lg-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  buttonSmall: [
    'var(--button-text-sm-font-size)',
    {
      fontWeight: 'var(--button-text-sm-font-weight)',
      letterSpacing: 'var(--button-text-sm-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  eyebrow: [
    'var(--eyebrow-font-size)',
    {
      fontWeight: 'var(--eyebrow-font-weight)',
      letterSpacing: 'var(--eyebrow-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  formLabel: [
    'var(--form-label-font-size)',
    {
      fontWeight: 'var(--form-label-font-weight)',
      letterSpacing: 'var(--form-label-letter-spacing)',
      lineHeight: '100%',
    },
  ],
  headingSans: [
    'var(--heading-sans-base-font-size)',
    {
      fontWeight: 'var(--heading-sans-base-font-weight)',
      letterSpacing: 'var(--heading-sans-base-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  headingSans2Xl: [
    'var(--heading-sans-2xl-font-size)',
    {
      fontWeight: 'var(--heading-sans-2xl-font-weight)',
      letterSpacing: 'var(--heading-sans-2xl-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  headingSans3Xl: [
    'var(--heading-sans-3xl-font-size)',
    {
      fontWeight: 'var(--heading-sans-3xl-font-weight)',
      letterSpacing: 'var(--heading-sans-3xl-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  headingSansExtraLarge: [
    'var(--heading-sans-xl-font-size)',
    {
      fontWeight: 'var(--heading-sans-xl-font-weight)',
      letterSpacing: 'var(--heading-sans-xl-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  headingSansExtraSmall: [
    'var(--heading-sans-xs-font-size)',
    {
      fontWeight: 'var(--heading-sans-xs-font-weight)',
      letterSpacing: 'var(--heading-sans-xs-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  headingSansLarge: [
    'var(--heading-sans-lg-font-size)',
    {
      fontWeight: 'var(--heading-sans-lg-font-weight)',
      letterSpacing: 'var(--heading-sans-lg-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  headingSansSmall: [
    'var(--heading-sans-sm-font-size)',
    {
      fontWeight: 'var(--heading-sans-sm-font-weight)',
      letterSpacing: 'var(--heading-sans-sm-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  headline: [
    'var(--headline-base-font-size)',
    {
      fontWeight: 'var(--headline-base-font-weight)',
      letterSpacing: 'var(--headline-base-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  headlineExtraSmall: [
    'var(--headline-xs-font-size)',
    {
      fontWeight: 'var(--headline-xs-font-weight)',
      letterSpacing: 'var(--headline-xs-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  headlineH1: [
    'var(--headline-h1-font-size)',
    {
      fontWeight: 'var(--headline-h1-font-weight)',
      letterSpacing: 'var(--headline-h1-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  headlineH2: [
    'var(--headline-h2-font-size)',
    {
      fontWeight: 'var(--headline-h2-font-weight)',
      letterSpacing: 'var(--headline-h2-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  headlineH3: [
    'var(--headline-h3-font-size)',
    {
      fontWeight: 'var(--headline-h3-font-weight)',
      letterSpacing: 'var(--headline-h3-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  headlineH4: [
    'var(--headline-h4-font-size)',
    {
      fontWeight: 'var(--headline-h4-font-weight)',
      letterSpacing: 'var(--headline-h4-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  headlineH5: [
    'var(--headline-h5-font-size)',
    {
      fontWeight: 'var(--headline-h5-font-weight)',
      letterSpacing: 'var(--headline-h5-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  headlineH6: [
    'var(--headline-h6-font-size)',
    {
      fontWeight: 'var(--headline-h6-font-weight)',
      letterSpacing: 'var(--headline-h6-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  headlineSmall: [
    'var(--headline-small-font-size)',
    {
      fontWeight: 'var(--headline-small-font-weight)',
      letterSpacing: 'var(--headline-small-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  iconLabel: [
    'var(--icon-label-font-size)',
    {
      fontWeight: 'var(--icon-label-font-weight)',
      letterSpacing: 'var(--icon-label-letter-spacing)',
      lineHeight: '100%',
    },
  ],
  statLarge: [
    'var(--stat-lg-font-size)',
    {
      fontWeight: 'var(--stat-lg-font-weight)',
      letterSpacing: 'var(--stat-lg-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  statMedium: [
    'var(--stat-md-font-size)',
    {
      fontWeight: 'var(--stat-md-font-weight)',
      letterSpacing: 'var(--stat-md-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  statSmall: [
    'var(--stat-sm-font-size)',
    {
      fontWeight: 'var(--stat-sm-font-weight)',
      letterSpacing: 'var(--stat-sm-letter-spacing)',
      lineHeight: '120%',
    },
  ],
  tableHeader: [
    'var(--table-header-font-size)',
    {
      fontWeight: 'var(--table-header-font-weight)',
      letterSpacing: 'var(--table-header-letter-spacing)',
      lineHeight: '120%',
    },
  ],
}
