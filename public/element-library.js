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

const showEl = (element) => {
  element.style.removeProperty("display");
};

const showElIf = (element, predicate) => {
  if(predicate()){
    showEl(element);
  }
};

const hideEl = (element) => {
  element.style["display"] = "none";
};

const hideElIf = (element, predicate) => {
  if(predicate()){
    hideEl(element);
  }
};

const turnOffEl = (element) => {
  element.style["visibility"] = "hidden";
};

const turnOffElIf = (element, predicate) => {
  if(predicate()){
    turnOffEl(element);
  }
};

const turnOnEl = (element) => {
  element.style.removeProperty("visibility");
};

const turnOnElIf = (element, predicate) => {
  if(predicate()){
    turnOnEl(element);
  }
};

const toggleEl = (element) => {
  if(!element.style.display){
    element.style["display"] = "none";
  } else {
    element.style.removeProperty("display");
  }
};
