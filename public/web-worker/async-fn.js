"use strict";

const asyncFn = async () => {
  console.time("asyncFn");
  const promises = [];
  for(let i = 0; i < 500000; i++){
    promises.push(Promise.resolve(i));
  }
  const resultArray = await Promise.all(promises);
  const result = resultArray.reduce((sum, value) => {
    return sum + value;
  }, 0);
  console.timeEnd("asyncFn");
  return result;
};
