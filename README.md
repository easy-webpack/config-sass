# @easy-webpack/config-sass
[Sass](http://sass-lang.com/) is a CSS pre-processor. This configuration enable you to compile Sass file and include in your webpack bundle.

[sass-loader](https://github.com/jtangelder/sass-loader) is used in this config.

This use [config-css](https://github.com/easy-webpack/config-css) to achieve loading of CSS module. It is highly recommended to read the documentation of config-css before using this module.

# Installation
```
npm install --save-dev @easy-webpack/config-sass
```
[easy-webpack](https://github.com/easy-webpack/core) is also required.

# Usage
```js
// webpack.config.js
const generateConfig = require('@easy-webpack/core').generateConfig;

const baseConfig = { ... }; // project-specific config like the entry file

module.exports = generateConfig(
  baseConfig,

  require('@easy-webpack/config-sass')
    ({/* Options object */ filename: 'styles.css', allChunks: true, sourceMap: false })
);

// This config will compile sass file imported and generate a CSS file named 'style.css' on output path 
```

# Options
All options (except the below one) are identical to that of config-css. Please refer to their [documentation](https://github/com/easy-webpack/config-css#options).

### additionalLoaders
Type: `string[]` Default: `[]`

This option need special notice as it may cause confusion.

All loaders string in this config option array will be append __before__ sass-loader.

For example,

```js
const generateConfig = require('@easy-webpack/core').generateConfig;

generateConfig(
  require('@easy-webpack/config-sass')
    ({ additionalLoaders: ['postcss-loader'], extractText: false })
)

// Final loader string will be 'style-loader!css-loader!postcss-loader!sass-loader'
```

# Tips
## Pass in options to sass compiler
Please refer to [options of node-sass](https://github.com/sass/node-sass#options) for all available options.

In Webpack 1, pass in options can be achieved by adding a `sassLoader` property on webpack config.
 
In Webpack 2, a [loader-options-plugin](https://webpack.js.org/plugins/loader-options-plugin/) must be used to pass in options. Note that you may only use this plugin once with a given test, as it will override *all the options* once used and can cause problems.

```js
const path = require('path');
const webpack = require('webpack');
const generateConfig = require('@easy-webpack/core').generateConfig;

// webpack 1
generateConfig(
  require('@easy-webpack/config-sass')(),
  {
    sassLoader: {
      includePaths: [path.resolve('node_modules/material-design-lite/src')]
    }
  }
);

// webpack 2
generateConfig(
  require('@easy-webpack/config-sass')(),
  {
    plugins: [new webpack.LoaderOptionsPlugin({
      test: /\.s[ac]ss$/i,
      options: {
        sassLoader: {
          includePaths: [path.resolve('node_modules/material-design-lite/src')]
        }
      }
    })]
  }
)
```
