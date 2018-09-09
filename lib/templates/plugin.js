/**
 * @class Fb
 */
class Fb {
  constructor (fbq, options) {
    this.fbq = fbq;
    this.options = options;
  }

  /**
   * @method enable
   */
  enable () {
    this.init();
    this.track();
  }

  /**
   * @method init
   */
  init () {
    this.query('init', this.options.pixelId);
  }

  /**
   * @method track
   */
  track () {
    this.query('track', this.options.track);
  }

  /**
   * @method query
   * @param {string} cmd 
   * @param {object} option 
   */
  query (cmd, option) {
    this.fbq(cmd, option);
  }
};

export default (ctx, inject) => {
  let _fbq

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
  ctx.$fb = instance;
  inject('fb', instance);
};
