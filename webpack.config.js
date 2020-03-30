let path = require("path");

module.exports = {
  entry: "./src/js/script.js",
  output: {
    path: __dirname + "/dist/js",
    filename: "bundle.js"
  },
  watch: true,
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["es6-promise"]
          }
        }
      }
    ]
  },
};
