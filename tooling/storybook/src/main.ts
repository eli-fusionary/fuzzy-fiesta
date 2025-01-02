// eslint-disable-next-line unicorn/prefer-node-protocol
import path from 'path'
import type { StorybookConfig } from '@storybook/nextjs'

const getAbsolutePath = (packageName: string): string =>
  // eslint-disable-next-line unicorn/prefer-module
  path.dirname(require.resolve(path.join(packageName, 'package.json')))

export const config: StorybookConfig = {
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-viewport'),
    {
      name: getAbsolutePath('@storybook/addon-styling-webpack'),
      options: {
        rules: [
          // Replaces existing CSS rules to support PostCSS
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { importLoaders: 1 },
              },
              {
                // Gets options from `postcss.config.js` in your project root
                loader: 'postcss-loader',
                // eslint-disable-next-line unicorn/prefer-module
                options: { implementation: require.resolve('postcss') },
              },
            ],
          },
        ],
      },
    },
  ],
  docs: {},
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {},
    },
  },
  stories: [
    '../../../packages/*/src/**/*.mdx',
    '../../../packages/*/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
}

export default config
