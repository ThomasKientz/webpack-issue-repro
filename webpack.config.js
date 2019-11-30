// eslint-ignore

const path = require('path');

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'script_webpack.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production'
};
