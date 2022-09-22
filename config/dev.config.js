/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist/dev'),
    filename: 'dev.bundle.js',
  },
};
