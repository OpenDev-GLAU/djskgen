'use strict';

window.gtag = (function () {
  var gaId = _getParams('googleAnalytics')['id'];
  _loadGoogleAnalytics(gaId);

  window.dataLayer = window.dataLayer || [];

  function _gtag() {
    dataLayer.push(arguments);
  }

  _gtag('js', new Date());
  _gtag('config', gaId);

  return _gtag;

  function _loadGoogleAnalytics(googleAnalyticsId) {
    var script = document.createElement('script');
    script.src = '//www.googletagmanager.com/gtag/js?id=' + googleAnalyticsId;
    document.head.appendChild(script);
  }

  function _getParams(script_name) {
    var scripts = document.getElementsByTagName('script');

    for (var i = 0; i < scripts.length; i++) {
      var regexp = new RegExp('/' + script_name + '(\\.[a-zA-Z0-9]{12})?\\.js');
      var src = scripts[i].src;

      if (regexp.test(src)) {
        var queryParams = src.split('?')[1].split('&');
        return queryParams.reduce(_parseParams, {});
      }
    }

    return {};
  }

  function _parseParams(params, value) {
    var keyValue = value.split('=');
    var _params = JSON.parse(JSON.stringify(params)); // Make a copy of params
    _params[keyValue[0]] = keyValue[1];
    return _params
  }
})();
