// slice
const numbers = [1, 2, 3, 4, 5];
const slicedArray = numbers.slice(1, 3); // [3, 4, 5]
console.log(numbers)
console.log(slicedArray);

// splice
const colors = ["червоний", "зелений", "синій"];
colors.splice(1, 1, "жовтий", "оранжевий", 123);
console.log(colors);
colors.splice(2, 2)
console.log(colors);

// concat
const array1 = [1, 2];
const array2 = [3, 4];
const concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); // [1, 2, 3, 4]

const restOperator = (...rest) => console.log(rest); // rest = []
// spread operator
const concatViaSpread = [...array1, ...array2];
console.log(concatViaSpread)