var webpack = require('webpack'),
  path = require('path');

module.exports = {
  entry: {
    main: ['babel-polyfill', './app/src/main.js'],
    sub: ['./app/src/sub.js']
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'app/build')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },

  // https://webpack.js.org/configuration/devtool/
  devtool: 'eval-source-map',

  devServer: {
    contentBase: './app',
    noInfo: true, //  --no-info option
    // host: '',
    port: 9000,
    hot: true,
    inline: true
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        drop_console: false,
        warnings: false
      },
      sourceMap: true,

      mangle: true,
      beautify: false
    })

    /*
    new webpack.BannerPlugin({
      banner: '',
      raw: true
    })
    */
  ]
};