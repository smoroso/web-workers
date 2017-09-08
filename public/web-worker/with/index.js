"use strict";

((window, document) => {
  const triggerCodeEl = document.getElementById("trigger-code");
  const displayResultEl = document.getElementById("display-result");
  const timeContainer = document.getElementById("time-container");
  const timeEl = document.getElementById("time");
  let workerInstance;

  const initialize = () => {
    toggleEl(timeContainer);
    triggerCodeEl.addEventListener("click", startWorker);
  };

  ////////////////////

  const startWorker = async () => {
    const start = window.performance.now();
    displayResultEl.innerText = "Calculating...";
    if(typeof(Worker) !== "undefined") {
      if(typeof(workerInstance) == "undefined") {
        workerInstance = new Worker("/web-worker/with/web-worker.js");
        workerInstance.onmessage = (event) => {
          displayResultEl.innerText = `Calculation result: ${event.data}`;
          stopTimeAndDisplay(start);
          stopWorker();
        };
      }
    } else {
      const result = await asyncFn();
      displayResultEl.innerText = `Calculation result: ${result}`;
    }
  };

  const stopTimeAndDisplay = (start) => {
    const end = window.performance.now();
    const time = (end - start).toFixed(2);
    setInEl(timeEl, time);
    toggleEl(timeContainer);
  };

  const stopWorker = () => {
    workerInstance.terminate();
    workerInstance = undefined;
  };

  initialize();
})(window, document);
