const path = require('path');

module.exports = () => ({
  resolve: {
    extensions: ['.jsx', '.json', '.js'],
    alias: {
      react: 'preact',
      'react-dom': 'preact',
      Fixtures: path.join(__dirname, '../../fixtures'),
    },
  },
});
