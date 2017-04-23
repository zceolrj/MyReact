const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const debug = require('debug')('app:config:webpack')

const project = require('./project.config')

const __DEV__ = project.globals.__DEV__
const __PROD__ = project.globals.__PROD__

debug('Creating Webpack Configuration')

const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: '',
  resolve: {
    alias: {
      ui: project.paths.client()
    },
    extensions: ['.js', '.jsx', '.json']
  },
  module: {}
}

/* Entry Points */
const APP_ENTRY = project.paths.client('index.js')

webpackConfig.entry = {
  main: __DEV__ ? [APP_ENTRY].concat(`webpack-hot-middleware/client?path=${project.compiler_public_path}__webpack_hmr`) : [APP_ENTRY]
}

/* Bundle Output */
webpackConfig.output = {
  filename: `[name].[${compiler_hash_type}].js`,
  path: project.paths.dist(),
  publicPath: project.compiler_public_path
}

/* Externals */


/* Plugins */
webpackConfig.plugins = [
  new webpack.DefinePlugin(project.globals),
  new HtmlWebpackPlugin({

  })
]

if (__DEV__) {
  debug('Enable plugins for live development (HMR, NoErrors)')
  webpackConfig.plugins.push(
    new webpack.hotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  )
}
else if(__PROD__) {
  debug('Enable plugins for production (OccurrenceOrder, Dedupe & UglifyJS)')
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  )
}

/* Loaders */
/* Javascript / Json */
webpackConfig.module.loaders = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel',
    query: project.compiler_babel
  },
  {
    test: /\.json$/,
    loader: 'json'
  }
]

/* Style loaders */
