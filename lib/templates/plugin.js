/**
 * @class Fb
 */
class Fb {
  constructor (fbq, options) {
    this.options = options
    this.fbq = fbq

    this.isEnabled = !options.disabled
  }

  /**
   * @method enable
   */
  enable () {
    this.isEnabled = true
    this.init()
    this.track()
  }

  /**
   * @method disable
   */
  disable () {
    this.isEnabled = false
  }

  /**
   * @method init
   */
  init () {
    this.query('init', this.options.pixelId)
  }

  /**
   * @method track
   */
  track (event = null, parameters = null) {
    if (!event) {
      event = this.options.track
    }

    this.query('track', event, parameters)
  }

  /**
   * @method query
   * @param {string} cmd
   * @param {object} option
   * @param {object} parameters
   */
  query (cmd, option, parameters = null) {
    if (!this.isEnabled) return

    if (!parameters) {
      this.fbq(cmd, option)
    } else {
      this.fbq(cmd, option, parameters)
    }
  }
}

export default (ctx, inject) => {
  let _fbq

  /* eslint-disable */
  if (typeof window !== 'undefined') {
    ((f, b, e, v, n, t, s) => {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '<%= options.version %>';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.defer = true;
      t.src = v;
      s = b.getElementsByTagName('body')[0];
      s.parentNode.appendChild(t, s);

      _fbq = fbq;

      <% if (!options.disabled) { %>
      fbq('init', '<%= options.pixelId %>');
      fbq('track', '<%= options.track %>');
      <% } %>
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  }

  const instance = new Fb(_fbq, <%= JSON.stringify(options) %>);

  /**
   * Automatically track PageView
   */
  <% if (options.autoPageView) { %>
  if (ctx.app && ctx.app.router) {
    const router = ctx.app.router
    router.afterEach(() => {
      instance.track('PageView')
    })
  }
  <% } %>

  /* eslint-enable */
  ctx.$fb = instance
  inject('fb', instance)
}
