"use strict";

((document) => {
  const buttonEl = document.getElementById("trigger-code");
  buttonEl.addEventListener("click", () => {
    return asyncFn().then((result) => {
      console.log(result);
    });
  });
})(document);
