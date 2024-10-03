// webpack.config.js
const path = require('path');

module.exports = {
  entry: './main.js', // Entry file for bundling
  output: {
    filename: 'bundle.js', // Output file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'development', // or 'production' for production-ready code
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel loader for all JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile ES6 to older JavaScript syntax
        },
      },
    ],
  },
};
