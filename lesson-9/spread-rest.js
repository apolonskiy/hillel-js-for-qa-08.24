// rest
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

function add(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}
// 1, 2, 3, 4, 5 (NOT ARRAY)
console.log(add(...newNumbers)); // 6

//spread

const person = { name: "John", age: 30, gender: 'female' };
const newPerson = { gender: "male"};
const newNewperson = {...person, ...newPerson, newKey: "new value"}
const objectAssign = Object.assign(person, newPerson)

console.log(objectAssign)
console.log(newNewperson);