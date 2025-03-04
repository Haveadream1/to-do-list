const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/init.js',
  output: {
    filename: 'main.js',
    library: 'date_fns',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|js|mjs|cjs)$/i,
        exclude: {
          and: [/node_modules/], // Exclude libraries in node_modules ...
          not: [
            // Except for a few of them that needs to be transpiled because they use modern syntax
            /unfetch/,
            /d3-array|d3-scale/,
            /@hapi[\\/]joi-date/,
          ]
        },
      },
    ],
  },
};
