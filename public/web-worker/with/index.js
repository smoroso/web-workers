"use strict";

((window, document) => {
  let workerInstance;

  const startWorker = () => {
    if(typeof(Worker) !== "undefined") {
      if(typeof(workerInstance) == "undefined") {
        workerInstance = new Worker("/web-worker/with/web-worker.js");
        workerInstance.onmessage = (event) => {
          console.log(event.data);
          stopWorker();
        };
      }
    } else {
      return asyncFn().then((result) => {
        console.log(result);
      });
    }
  };

  const stopWorker = () => {
    workerInstance.terminate();
    workerInstance = undefined;
  };

  const buttonEl = document.getElementById("trigger-code");
  buttonEl.addEventListener("click", startWorker);
})(window, document);