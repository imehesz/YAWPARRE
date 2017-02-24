var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'deploy')
  },

  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loaders: ["babel?presets[]=es2015"]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=react']
      },

      {
        test: /\.rt\.html$/,
        loaders: ["babel?presets[]=es2015", "react-templates-loader?modules=es6"],
        exclude: /node_modules/
      },
    ]
  }
};
