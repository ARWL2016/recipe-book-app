var path = require('path'); 

module.exports = {
  entry: [
    './app/src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'app/build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'app/')
  }, 
  devtool: "inline-source-map"
};
