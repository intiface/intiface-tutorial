'use strict';

// Set wikifier to output <p> tags.
Config.cleanupWikifierOutput = true;

var _paq = _paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u=(('https:' == document.location.protocol) ? 'https' : 'http') + '://apps.nonpolynomial.com/piwik/';
  // Ensure URL ends with slash
  if (u.slice(-1) !== '/') u+='/';
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  _paq.push(['setSiteId', 10]);
  var d=document,
      g=d.createElement('script'),
      s=d.getElementsByTagName('script')[0];
  g.type='text/javascript';
  g.defer=true;
  g.async=true;
  g.src=u+'piwik.js';
  s.parentNode.insertBefore(g,s);
})();
