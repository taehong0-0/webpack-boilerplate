const path = require('path');

module.exports = {
  mode: 'development',
  entry: './public/pages/index.js',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader"  // compiles Sass to CSS, using Node Sass by default
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"]
      }
    ]
  },
  devtool: 'source-map'
};