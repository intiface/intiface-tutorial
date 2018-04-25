$(document).on(":passageend", (ev) => {
  var _paq = _paq || [];
  _paq.push(['setDocumentTitle', passage()]);
  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);
  (function() {
    var u=(("https:" == document.location.protocol) ? "https://apps.nonpolynomial.com/p/" : "http://apps.nonpolynomial.com/p/");
    _paq.push(["setTrackerUrl", u+"js/"]);
    _paq.push(["setSiteId", "10"]);
    var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0]; g.type="text/javascript";
    g.defer=true; g.async=true; g.src=u+"js/"; s.parentNode.insertBefore(g,s);
  })();
});
