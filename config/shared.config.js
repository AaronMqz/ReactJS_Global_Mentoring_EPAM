const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/\.html$/, /\.json$/, /\.ejs$/, /node_modules/],
        use: ["babel-loader"],
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  devServer: {
    static: path.resolve(__dirname, "../public"),
    compress: true,
    port: 8000,
    open: true,
  },
};
