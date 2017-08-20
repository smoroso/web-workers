"use strict";

((window) => {
  let workerInstance;

  const startWorker = () => {
    if(typeof(Worker) !== "undefined") {
      if(typeof(workerInstance) == "undefined") {
        workerInstance = new Worker("/js/demo_workers.js");
      }
      workerInstance.onmessage = (event) => {
        document.getElementById("result").innerHTML = event.data;
      };
    } else {
      document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
    }
  };

  const stopWorker = () => {
    workerInstance.terminate();
    workerInstance = undefined;
  };

  window.startWorker = startWorker;
  window.stopWorker  = stopWorker;
})(window);
