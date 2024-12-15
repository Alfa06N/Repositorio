const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry file
  output: {
    filename: "main.js", // Output file's name
    path: path.resolve(__dirname, "dist-weather"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Weather App",
      template: "./src/template.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
  devServer: {
    static: "./dist-weather",
    compress: true,
    port: 8080,
    open: true,
    liveReload: true,
    // hot: true,
  },
};
