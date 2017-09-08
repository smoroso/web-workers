"use strict";

((document, window) => {
  const nextPageBtnEl = document.getElementById("next-page-btn");
  const previousPageBtnEl = document.getElementById("previous-page-btn");
  const pageNumberEl = document.getElementById("page-number");
  const loadingTimeContainer = document.getElementById("loading-time-container");
  const loadingTimeEl = document.getElementById("loading-time");
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
    enableElIf(previousPageBtnEl, () => pageNumber > minPage);
    disableElIf(nextPageBtnEl, () => pageNumber === maxPage);
    emptyEl(displayResultEl);
    return getImages(pageNumber);
  });

  previousPageBtnEl.addEventListener("click", async () => {
    pageNumber--;
    pageNumberEl.innerText = pageNumber;
    disableElIf(previousPageBtnEl, () => pageNumber === minPage);
    enableElIf(nextPageBtnEl, () => pageNumber < maxPage);
    emptyEl(displayResultEl);
    return getImages(pageNumber);
  });

  const initialize = async () => {
    pageNumber = 1;
    pageNumberEl.innerText = pageNumber;
    disableElIf(previousPageBtnEl, () => true);
    toggleEl(loadingSpinnerContainer);
    return getImages(pageNumber);
  };

  ////////////////////

  const getImages = async (pageNumber) => {
    pageNumberEl.innerHtml = pageNumber;
    emptyEl(displayResultEl);
    toggleEl(loadingTimeContainer);
    toggleEl(loadingSpinnerContainer);
    const start = window.performance.now();
    console.time("fetchImages");
    const imagesUrlArray = [...Array(totalImages).keys()].map((i) => {
      const id = (totalImages*(pageNumber-1))+i+1;
      return imageBaseUrl+id;
    });
    const promises = imagesUrlArray.map(fetchImage);
    const objectsUrlArray = await Promise.all(promises);
    console.timeEnd("fetchImages");
    const end = window.performance.now();
    const time = (end - start).toFixed(2);
    console.log(time);
    setInEl(loadingTimeEl, time);
    toggleEl(loadingTimeContainer);
    toggleEl(loadingSpinnerContainer);
    objectsUrlArray.forEach(renderImage);
  };

  const fetchImage = async (url) => {
    const response = await fetch(url);
    const myBlob = await response.blob();
    return URL.createObjectURL(myBlob);
  };

  const renderImage = (objectURL) => {
    const imgEl = document.createElement("img");
    imgEl.src = objectURL;
    appendInEl(displayResultEl, imgEl);
  };

  return initialize();
})(document, window);
