"use strict";

((document) => {
  const buttonEl = document.getElementById("trigger-code");
  buttonEl.addEventListener("click", async () => {
    const result = await asyncFn();
    console.log(result);
  });
})(document);
