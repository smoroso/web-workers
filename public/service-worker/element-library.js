"use strict";

const appendInEl = (element, content) => {
  element.appendChild(content);
};

const setInEl = (element, content) => {
  element.innerText = content;
};

const disableElIf = (element, predicate) => {
  if(predicate()){
    element.disabled = true;
  }
};

const enableElIf = (element, predicate) => {
  if(predicate()){
    element.disabled = false;
  }
};

const emptyEl = (element) => {
  element.innerText = "";
};

const toggleEl = (element) => {
  if(!element.style.display){
    element.style["display"] = "none";
  } else {
    element.style.removeProperty("display");
  }
};
