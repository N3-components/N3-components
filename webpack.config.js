var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssnano = require('cssnano');
var path = require('path');

module.exports = {
  entry: {
    zh: ['babel-polyfill', './docs/zh.js'],
    en: ['babel-polyfill', './docs/en.js']
  },
  output: {
    path: path.resolve('./','./docs/static'),
    publicPath: './docs/static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.jsx'],
    alias: {
      vue$: 'vue/dist/vue.common.js',
      src: __dirname + '/src'
    }
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: 'url-loader'
      },
      {
        test: /\.md/,
        use: 'vue-markdown-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        use: 'babel-loader'
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:[
            'css-loader',
            {
              loader:'postcss-loader',
              options:{
                plugins:[
                  require('autoprefixer')(),
                  require('cssnano')()
                ]
              }
            },
            'less-loader']
        })
      }
    ]
  },
  devtool: 'source-map',
  plugins:[
    new ExtractTextPlugin({
      filename:'index.css',
      allChunks:true
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  delete module.exports.devtool
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
