var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    default: ['babel-polyfill', './docs/index.js'],
    blue: ['babel-polyfill', './docs/blue.js']
  },
  output: {
    path: './docs/static',
    publicPath: './docs/static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css'],
    root: path.resolve('./'),
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    loaders: [{ test: /\.vue$/, loader: 'vue' },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader'
    },
    {
      test: /\.js$/,
      exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
      loader: 'babel'
    },
    {test: /\.less$/, loader: 'style-loader!css-loader!less-loader!autoprefixer'},
    {test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer'}
    ]
  },
  babel: {
    presets: ['es2015']
  },
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