"use strict";

(() => {
  let i = 0;

  const timedCount = () => {
      i++;
      postMessage(i);
  };

  setInterval(timedCount, 500);
})();
