const BugsnagSourceMapUploaderPlugin = require('webpack-bugsnag-plugins').BugsnagSourceMapUploaderPlugin

module.exports = {
  entry: __dirname + '/src/index.js',
  devtool: 'hidden-source-map',
  output: {
    path: __dirname + '/dist',
    publicPath: 'https://foobar.com/js',
    futureEmitAssets: true
  },
  plugins: [
    new BugsnagSourceMapUploaderPlugin({
      apiKey: 'YOUR_API_KEY'
    })
  ]
}
