const path = require("path");
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.js"),
  watch: true,
  output: {
    filename: "bundle.js",
  },
  plugins: [new DashboardPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        query: {
          presets: [
            [
              "@babel/env",
              {
                targets: {
                  browsers: "last 2 chrome versions",
                },
              },
            ],
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    historyApiFallback: true,
    inline: true,
    host: "localhost",
    port: 2108,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
