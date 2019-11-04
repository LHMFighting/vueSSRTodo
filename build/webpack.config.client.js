const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
// const ExtractPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const VueClientPlugin = require('vue-server-renderer/client-plugin')

const isDev = process.env.NODE_ENV === 'development'

const devServer = {
  port: '8000',
  host: '0.0.0.0',
  overlay: {
    errors: true
  },
  historyApiFallback: {
    index: '/public/index.html'
  },
  // open: true,
  hot: true
}

const defultConfig = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, 'template.html')
  }),
  new VueClientPlugin()
]

let config

if (isDev) {
  config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        }
      ]
    },
    devServer,
    plugins: defultConfig.concat([
      new webpack.HotModuleReplacementPlugin()
    ])
  })
} else {
  config = merge(baseConfig, {
    output: {
      filename: '[name].[chunkhash:8].js',
      publicPath: '/public/'
    },
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        }
      ]
    },
    plugins: defultConfig.concat([
      new MiniCssExtractPlugin({
        filename: 'styles.[contenthash:8].css'
      })
    ]),
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      runtimeChunk: true
    }
  })
}

module.exports = config
