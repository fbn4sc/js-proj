const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:3000"
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: path.resolve("./src"),
        loader: "babel-loader"
      }
    ]
  }
};
