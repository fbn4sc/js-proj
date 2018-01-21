const path = require("path");
const glob = require("glob");

const entries = {};
glob.sync("./src/scripts/components/**/*Page.jsx").map(entry => {
  entries[path.basename(entry, ".jsx")] = entry;
});

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, "dist/scripts"),
    filename: "[name].bundle.js"
  },
  devtool: "inline-source-map",
  devServer: {
    publicPath: "/dist/scripts/",
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
