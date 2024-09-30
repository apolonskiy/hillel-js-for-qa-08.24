const fruits = ['apple', 'banana', 'orange', 1];
const numbers = new Array(1, 2, 3, 4, 5);

console.log(fruits[0]);
console.log(numbers[0]);
// const obj = {
//     0: 'value1',
//     1: 'value2',
//     key1: 'value3'
// }

// console.log(obj[0]);

fruits[0] = 'cherry'
console.log(fruits[0]);
console.log(fruits.length);

const lastIndex = fruits.length - 1;
console.log(fruits[lastIndex]); // Виведе "orange"

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[2][1]); //

const matrixReal = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

