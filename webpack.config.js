const path = require('path')

module.exports = {
  entry: __dirname + "/src/ClientApp.js",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      }
    ]
  }
}
