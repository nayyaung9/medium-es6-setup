module.exports = {
  entry: ['./src/app.js'],
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: ['babel-loader'],
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 8080
  }
}