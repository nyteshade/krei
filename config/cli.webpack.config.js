'use strict';

let Path = require('path');
let root = Path.resolve(Path.join(__dirname, '..'));

module.exports = {
    entry: ['babel-polyfill', './src/krei-cli.js'],
    output: {
      path: Path.join(root, 'lib'),
      filename: 'krei-cli.js',
      libraryTarget: 'commonjs2'
    },
    target: 'node',
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            "presets": [
              "latest",
              "es2015",
              "es2016",
              "es2017",
              "flow",
              ["env", {
                "targets": { "node": "current" },
                "modules": "commonjs",
                "useBuiltIns": true,
                "debug": true
              }]
            ],
            "plugins": ["transform-decorators-legacy"]
          }
        }
      ]
    }
}
