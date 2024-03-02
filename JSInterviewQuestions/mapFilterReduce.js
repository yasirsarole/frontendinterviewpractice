// map, filter and reduce

// What is map?
// Returns a new array by applying logic to every element in an array
// input arr and o/p arr length is same here
const nums = [1, 2, 3, 4];
const multiplyByThree = nums.map((num) => num * 3);
console.log(multiplyByThree);

// Polyfill for map
Array.prototype.myMap = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }

  return result;
};
const multiplyByThree2 = nums.myMap((num) => num * 3);
console.log(multiplyByThree2);

// What is filter?
// Returns a new array with elements whose condition is satisfied in the callback function
// input arr and o/p arr length are not necessarily same
const greatherThan1 = nums.filter((num) => num > 1);
console.log(greatherThan1);
Array.prototype.myFilter = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};
const greatherThan1P = nums.myFilter((num) => num > 1);
console.log(greatherThan1P);

// What is reduce
// Return an accumulated value
// Could be a string, object, array, number ....
const sumOfElements = nums.reduce((acc, elem) => acc + elem, 0);
console.log(sumOfElements);
Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};
const sumOfElements2 = nums.myReduce((acc, elem) => acc + elem, 0);
console.log(sumOfElements2);

// map vs forEach
const arr = [2, 3, 4, 5, 6];
const resultMap = arr.map((a) => {
  return a + 1;
});
const resultForEach = arr.forEach((a) => {
  return a + 1;
});
console.log(resultMap, resultForEach);
// OP = [ 3, 4, 5, 6, 7 ] undefined
//  ==== map returns an Array, forEach does not return anything
// forEach can be used in a different way, e.g: To modify the original array
arr.forEach((a, i) => {
  arr[i] = a + 3;
});
console.log(arr);
// OP = [ 5, 6, 7, 8, 9 ]

// ==== in map we can do chaining of methods eg. arr.map().filter but we cannot do this in forEach as it does not return anything
