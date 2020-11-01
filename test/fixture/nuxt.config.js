const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  modules: [
    ['@@', {
      pixelId: 'PIXEL_CODE',
      debug: true
    }]
  ]
}
