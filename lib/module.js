const path = require('path')

module.exports = function facebookPixelModule (moduleOptions) {
  const defaults = {
    pixelId: null,
    track: 'PageView',
    version: '2.0',
    disabled: false,
    debug: false
  }

  const options = Object.assign({}, defaults, this.options.facebook, moduleOptions)

  if (!options.pixelId) throw new Error('The `pixelId` option is required.')

  // Don't include when run in dev mode unless debug: true is configured
  if (this.options.dev && !options.debug) {
    return
  }

  this.addPlugin({
    src: path.resolve(__dirname, './templates/plugin.js'),
    ssr: false,
    options
  })
}

module.exports.meta = require('../package.json')
