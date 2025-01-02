// eslint-disable-next-line unicorn/prefer-node-protocol
import path from 'path'
import type { StorybookConfig } from '@storybook/nextjs'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { ProvidePlugin } from 'webpack'

import { config as baseConfig } from '@local/storybook-config'

const config: StorybookConfig = {
  ...baseConfig,
  addons: [
    ...(baseConfig.addons ?? []),
    '@etchteam/storybook-addon-css-variables-theme',
  ],
  webpackFinal: config => {
    config.resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve?.plugins ?? []),
        new TsconfigPathsPlugin({
          // eslint-disable-next-line unicorn/prefer-module
          configFile: path.join(__dirname, '../tsconfig.json'),
        }),
      ],
    }

    config.plugins = [
      ...(config.plugins ?? []),
      new ProvidePlugin({
        React: 'react',
      }),
    ]

    return config
  },
}

export default config
