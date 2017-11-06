const path = require('path');

module.exports = function module (moduleOptions) {
  const defaults = {
    pixelId: null,
    track: 'PageView',
    version: '2.0',
  };
  const options = Object.assign({}, defaults, this.options.facebook, moduleOptions);

  this.addPlugin({
    src: path.resolve(__dirname, './templates/plugin.js'),
    ssr: false,
    options,
  });

};
