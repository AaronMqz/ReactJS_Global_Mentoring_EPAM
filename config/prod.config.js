/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  output: {
    path: path.resolve(__dirname, '../dist/prod'),
    filename: 'prod.bundle.js',
  },
  performance: {
    hints: false,
  },
};
