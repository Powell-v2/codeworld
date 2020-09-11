const path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = () => {
  const mode = process.env.NODE_ENV;
  const isProduction = mode === 'production';

  return {
    entry: {
      polyfills: './js/polyfills.js',
      index: './js/codeworld.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode,
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
