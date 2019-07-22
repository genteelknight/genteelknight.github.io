const path = require('path');

const dist = 'dist';
const distAbsolute = path.resolve(__dirname, 'dist') + path.sep + '**';

module.exports = {
  open: false,
  files: [distAbsolute],
  server: {
    baseDir: dist,
  },
};
