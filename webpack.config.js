const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: {
    hot: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,  
        pathRewrite: {'^/api' : ''},      
      },
    },
    static: {
        directory: path.join(__dirname, 'dist'),
    },
    client: {
        logging: 'none',
        overlay: false,
    },
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        inject: 'body',
        body: {
            defer: true,
        }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('process.env.NODE_ENV'),
      },
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
        "assert": require.resolve("assert/"),
        "async_hooks": require.resolve("async_hooks"),
        "buffer": require.resolve("buffer/"),
        "crypto": require.resolve("crypto-browserify"),
        "fs": false,
        "net": false,
        "tls": false,
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "path": require.resolve("path-browserify"), 
        "process": require.resolve("process/browser"),
        "stream": require.resolve("stream-browserify"),
        "url": require.resolve("url/"),
        "tty": require.resolve("tty-browserify"),
        "util": require.resolve("util/"),
        "zlib": require.resolve("browserify-zlib")
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
}

module.exports = config;

