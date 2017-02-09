'use strict';

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ComponentResolverPlugin = require('component-resolver-webpack');
var webpack = require('webpack');

// helpers for writing path names
// e.g. join("web/static") => "/full/disk/path/to/web/static"
function join(dest) { return path.resolve(__dirname, dest); }

function web(dest) { return join('web/static/' + dest); }

var config = module.exports = {

  devtool: 'source-map',

  entry: {
    application: [
      web('css/application.scss'),
      web('js/application.js'),
    ],
  },

  output: {
    path: join('priv/static'),
    filename: 'js/[name].js',
  },

  resolve: {
    extensions: ['', '.js', '.sass'],
    modulesDirectories: ['node_modules'],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['transform-decorators-legacy'],
          presets: ['react', 'es2015', 'stage-2', 'stage-0'],
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css!scss?indentedSyntax&includePaths[]=' + __dirname +  '/node_modules'),
      },
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   loader: 'style!css?modules&localIdentName=[path][name]_[local]_[hash:base64:5]&importLoaders=2!sass',
      // }
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.ResolverPlugin([
      new ComponentResolverPlugin()
    ]),
    new ExtractTextPlugin('css/application.css'),
  ],
};

// if running webpack in production mode, minify files with uglifyjs
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  );
}
