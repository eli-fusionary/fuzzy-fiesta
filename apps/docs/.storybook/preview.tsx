import type { Preview } from '@storybook/react'
import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme'

import { preview as basePreview } from '@local/storybook-config'

import '@local/storybook-config/style.css'
import './style.css'
import '@local/ui/styles.css'

// @ts-expect-error - We can't get this
// eslint-disable-next-line import/no-unresolved
import defaultTheme from '!!style-loader?injectType=lazyStyleTag!css-loader!@local/themes/default.css'

const parameters = {
  ...basePreview.parameters,
  cssVariables: {
    defaultTheme: 'Default Theme',
    files: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'Default Theme': defaultTheme,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  options: {
    ...basePreview.parameters?.options,
    storySort: {
      method: 'alphabetical',
      order: [
        'Layouts',
        'Pages',
        'Sections',
        'Typography',
        'Elements',
        'Layout',
        'Forms',
        'Icons',
      ],
    },
  },
}

const preview: Preview = {
  ...basePreview,
  parameters,
}

export default preview

export const decorators = [cssVariablesTheme]
