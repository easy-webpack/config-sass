import {WebpackConfigWithMetadata, get} from '@easy-webpack/core'
import * as easyCss from '@easy-webpack/config-css'
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * SASS loader support for *.scss
 * filename: name of the extracted file
 * allChunks: should we extract all chunks to the file?
 * sourceMap: do you want a sourceMap generated? (takes longer)
 * extractText: do you want to extract all css to a separate file? boolean, configuration object or instance of ExtractTextPlugin, defaults to true
 * resolveRelativeUrl: boolean or object with parameters
 */
export = function sass({ filename = '[name].css', allChunks = false, sourceMap = false, extractText = undefined, resolveRelativeUrl = undefined, additionalLoaders = [] } = {}) {
  additionalLoaders.push(`sass-loader${sourceMap ? '?sourceMap' : ''}`)
  return easyCss({ test: /\.(scss|sass)$/i, filename, allChunks, extractText, resolveRelativeUrl, sourceMap, additionalLoaders })
}

