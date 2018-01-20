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
  resolve: { extensions: [".js", ".jsx"] },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: path.resolve("./src"),
        use: ["babel-loader", "prettier-loader", "eslint-loader"]
      }
    ]
  }
};
