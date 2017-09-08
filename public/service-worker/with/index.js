"use strict";

((window, document, navigator) => {
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

  const initialize = () => {
    console.log(navigator);
  };

  ////////////////////

  initialize();
})(window, document, navigator);
