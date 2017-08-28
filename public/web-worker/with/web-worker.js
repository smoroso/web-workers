"use strict";

(() => {
  importScripts("/web-worker/async-fn.js");
  return asyncFn().then((result) => {
    self.postMessage(result);
  });
})();
