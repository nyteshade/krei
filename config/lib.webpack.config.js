'use strict';

let Path = require('path');
let root = Path.resolve(Path.join(__dirname, '..'));

module.exports = {
    entry: ['babel-polyfill', './src/krei.js'],
    output: {
      path: Path.join(root, 'lib'),
      filename: 'krei.js',
      libraryTarget: 'commonjs2'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['latest']
          }
        }
      ]
    }
}
