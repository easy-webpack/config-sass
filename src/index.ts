import {WebpackConfig, get} from '@easy-webpack/core';

/**
 * Sass loader support for *.scss
 */
export = function sass() {
  return function sass(this: WebpackConfig): WebpackConfig {
    const config = {
      module: {
        loaders: get(this, 'module.loaders', []).concat([{
          test: /\.scss$/i,
          loaders: loaders: ['style', 'css', 'sass']
        }])
      }
    } as WebpackConfig

    return config
  }
}