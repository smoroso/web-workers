"use strict";

((window, document) => {
  const triggerCodeEl = document.getElementById("trigger-code");
  const displayResultEl = document.getElementById("display-result");
  const timeContainer = document.getElementById("time-container");
  const timeEl = document.getElementById("time");

  const initialize = () => {
    toggleEl(timeContainer);

    triggerCodeEl.addEventListener("click", calculate);
  };

  ////////////////////

  const calculate = async () => {
    const start = window.performance.now();
    displayResultEl.innerText = "Calculating...";
    const result = await asyncFn();
    displayResultEl.innerText = `Calculation result: ${result}`;
    const end = window.performance.now();
    const time = (end - start).toFixed(2);
    setInEl(timeEl, time);
    toggleEl(timeContainer);
  };

  initialize();
})(window, document);
