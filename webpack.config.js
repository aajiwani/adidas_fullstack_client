const path = require("path");

var config = {
  entry: "./index.js",

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },

  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true
  },

  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "node_modules")
    ]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",

        query: {}
      }
    ]
  }
};

module.exports = config;
