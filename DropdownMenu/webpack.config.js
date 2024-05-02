const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 

module.exports = {
  mode: 'development',
  entry: './src/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/, //Regla para manejar archivos css
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dropdown Menu',
      template: './src/template.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/icons',
          to: 'icons',
        }
      ]
    })
  ]
}