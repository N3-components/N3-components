var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var path = require('path')

module.exports = {
  entry: {
    zh: ['babel-polyfill', './docs/zh.js'],
    en: ['babel-polyfill', './docs/en.js']
  },
  output: {
    path: './docs/static',
    publicPath: './docs/static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css', '.jsx'],
    root: path.resolve('./'),
    alias: {
      vue: 'vue/dist/vue.js',
      src: __dirname + '/src'
    }
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.md/,
        loader: 'vue-markdown-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!postcss!less-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss'
      }
    ]
  },
  babel: {
    presets: ['es2015','stage-0'],
    plugins: ['transform-vue-jsx']
  },
  postcss: [autoprefixer],
  devtool: 'source-map'
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
