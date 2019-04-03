const path = require('path');

const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    filename: 'app.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
