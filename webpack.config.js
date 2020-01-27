/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      { test: /\.(t|j)sx?$/, use: ['ts-loader', 'eslint-loader'], exclude: /node_modules/ },
      { enforce: "pre", test: /\.js$/, exclude: /node_modules/, loader: "source-map-loader" },
      // {
      //   test: /\.(js|jsx)$/,
      //   use: ['babel-loader', 'eslint-loader'],
      //   exclude: /node_modules/,
      // },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    contentBase: './dist',
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: 'static/index.html',
      inject: true,
      appMountId: 'root',
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

module.exports = (env, argv) => {
  if (argv.hot) {
    config.output.filename = '[name].[hash].js';
  }
  if(!argv.mode === 'production'){
    config.plugins = [
      ...config.plugins,
      new BundleAnalyzerPlugin({
        openAnalyzer: false
      })
    ]
  } // @TODO: Сделать нормально

  return config;
};
