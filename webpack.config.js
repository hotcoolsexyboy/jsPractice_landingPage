let path = require('path');

module.exports = {
  entry: './src/js/script.js',
  output: {
    path: __dirname + '/dist/js',
    filename: 'bundle.js'
  },
  watch: true,
  devtool: "source-map",
  mode: 'development'
};