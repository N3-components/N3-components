var config = require('./webpack.config.js')

config.entry = {
  'N3Components': './src/index.js'
}

config.output = {
  path: './dist',
  filename: '[name].js',
  libraryTarget: 'umd'
}

module.exports = config
