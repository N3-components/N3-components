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

config.externals = [{
    vue: {
        root: 'Vue',
        commonjs2: 'vue',
        commonjs: 'vue',
        amd: 'vue'
    }
}]

module.exports = config
