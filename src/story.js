'use strict';

// Set wikifier to output <p> tags.
Config.cleanupWikifierOutput = true;

$(document).on(":passageend", function (ev) {
  if ("undefined" !== typeof(_paq)) {
    _paq.push(['trackPageView', passage()]);
  }
});

