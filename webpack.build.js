var config = require('./webpack.config.js')
var path = require('path');

config.entry = {
  'N3Components': './src/index.js'
}

config.output = {
  path: path.resolve('./','./dist'),
  filename: '[name].js',
  libraryTarget: 'umd'
}

module.exports = config
