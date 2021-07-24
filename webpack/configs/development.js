const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('../utils/paths');
// const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

module.exports = env => ({
  devtool: 'cheap-eval-source-map',
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    // new HtmlWebpackExternalsPlugin({
    //   externals: [
    //     {
    //       module: 'jquery',
    //       entry: 'https://unpkg.com/jquery@3.2.1/dist/jquery.min.js',
    //       global: 'jQuery',
    //     },
    //   ],
    // })
  ],
  devServer: {
    contentBase: paths.BUILD_DIR,
    publicPath: '',
    historyApiFallback: true,
    compress: true,
    port: 4040,
    noInfo: true,
    quiet: true,
    clientLogLevel: 'warning',
    stats: 'errors-only',
    open: true,
  },
});
