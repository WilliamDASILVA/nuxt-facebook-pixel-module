export default (context) => {
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

      fbq('init', '<%= options.pixelId %>');
      fbq('track', '<%= options.track %>');
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  }
};
