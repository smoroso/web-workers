"use strict";

const asyncFn = () => {
  const promises = [];
  for(let i = 0; i < 100000; i++){
    promises.push(Promise.resolve(i));
  }
  return Promise.all(promises).then((results) => {
    return results.reduce((sum, value) => {
      return sum + value;
    }, 0);
  });
};
