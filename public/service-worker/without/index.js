"use strict";

((window, document) => {
  const nextPageBtnEl = document.getElementById("next-page-btn");
  const previousPageBtnEl = document.getElementById("previous-page-btn");
  const pageNumberEl = document.getElementById("page-number");
  const timeContainer = document.getElementById("time-container");
  const timeEl = document.getElementById("time");
  const loadingSpinnerContainer = document.getElementById("loading-spinner-container");
  const displayResultEl = document.getElementById("display-result");
  const imageBaseUrl = "https://unsplash.it/458/354?image=";
  const totalImages = 36;
  const minPage = 1;
  const maxPage = 3;

  let pageNumber;

  nextPageBtnEl.addEventListener("click", async () => {
    pageNumber++;
    pageNumberEl.innerText = pageNumber;
    turnOnElIf(previousPageBtnEl, () => pageNumber > minPage);
    turnOffElIf(nextPageBtnEl, () => pageNumber === maxPage);
    emptyEl(displayResultEl);
    return getImages(pageNumber);
  });

  previousPageBtnEl.addEventListener("click", async () => {
    pageNumber--;
    pageNumberEl.innerText = pageNumber;
    turnOffElIf(previousPageBtnEl, () => pageNumber === minPage);
    turnOnElIf(nextPageBtnEl, () => pageNumber < maxPage);
    emptyEl(displayResultEl);
    return getImages(pageNumber);
  });

  const initialize = async () => {
    pageNumber = 1;
    pageNumberEl.innerText = pageNumber;
    turnOffEl(previousPageBtnEl);
    toggleEl(loadingSpinnerContainer);
    return getImages(pageNumber);
  };

  ////////////////////

  const getImages = async (pageNumber) => {
    try {
      pageNumberEl.innerHtml = pageNumber;
      emptyEl(displayResultEl);
      toggleEl(timeContainer);
      toggleEl(loadingSpinnerContainer);
      const start = window.performance.now();
      const imagesUrlArray = [...Array(totalImages).keys()].map((i) => {
        const id = (totalImages*(pageNumber-1))+i+1;
        return imageBaseUrl+id;
      });
      const promises = imagesUrlArray.map(fetchImage);
      const objectsUrlArray = await Promise.all(promises);
      const objectsUrlToDisplay = objectsUrlArray.filter(url => url);
      const end = window.performance.now();
      const time = (end - start).toFixed(2);
      setInEl(timeEl, time);
      toggleEl(timeContainer);
      toggleEl(loadingSpinnerContainer);

      if(objectsUrlToDisplay.length === 0){
        setInEl(displayResultEl, "No Images to Display");
        return null;
      }

      objectsUrlToDisplay.forEach(renderImage);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchImage = async (url) => {
    try {
      const response = await fetch(url);
      const myBlob = await response.blob();
      return URL.createObjectURL(myBlob);
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const renderImage = (objectURL) => {
    const imgEl = document.createElement("img");
    imgEl.src = objectURL;
    appendInEl(displayResultEl, imgEl);
  };

  return initialize();
})(window, document);
