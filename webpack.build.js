var config = require('./webpack.config.js')
var path = require('path');

delete config.devtool

config.entry = {
  'index': './src/index.js'
}

config.output = {
  path: path.resolve('./','./dist'),
  filename: '[name].js',
  libraryTarget: 'umd'
}

module.exports = config
