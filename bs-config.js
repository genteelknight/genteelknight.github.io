const path = require('path');

const dist = 'dist';
const distAbsolute = path.resolve(__dirname, 'dist') + path.sep + '**';

module.exports = {
  files: [distAbsolute],
  server: {
    baseDir: dist,
  },
};
