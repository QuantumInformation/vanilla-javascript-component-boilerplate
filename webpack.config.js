const path = require('path')
const merge = require('webpack-merge')
var WebpackBuildNotifierPlugin = require('webpack-build-notifier')

const PATHS = {
  src: path.join(__dirname, './src'),
  build: path.join(__dirname, './build')
}

const commonConfig = merge([
  {
    entry: {
      'javascript-component': PATHS.src + '/JavaScriptComponent.js'
    },
    output: {
      path: PATHS.build,
      filename: '[name].js',
      library: 'JavaScriptComponent',
      libraryTarget: 'umd'
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        {
          test: /\.p?css$/,
          loaders: [
            'style-loader',
            'css-loader?importLoaders=1,url=false',
            'postcss-loader'
          ]
        }
      ]
    },

    resolve: {
      // you can now require('file') instead of require('file.js')
      extensions: ['.ts', '.js']
    },

    plugins: [
      new WebpackBuildNotifierPlugin({
        title: 'My Project Webpack Build'
      })
    ]
  }
])

const productionConfig = merge([])

const developmentConfig = merge([
])

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig)
  }

  return merge(commonConfig, developmentConfig)
}
