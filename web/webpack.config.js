const path = require('path');

module.exports = {
  entry: {
    polyfills: './js/polyfills.js',
    index: './js/codeworld.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};
