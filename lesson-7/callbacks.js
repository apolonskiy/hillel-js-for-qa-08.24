//Assign a function to a variable originalFunc
const originalFunc = (num) =>  num + 2;

//Re-assign the function to a new variable newFunc
const newFunc = originalFunc;

//Access the function's name property
console.log(newFunc.name); //'originalFunc'

//Return the function's body as a string
console.log(newFunc.toString()); //'(num) => { return num + 2 }'

//Add our own isMathFunction property to the function
newFunc.isMathFunction = true;

console.log(originalFunc.isMathFunction)
//Pass the function as an argument
const functionNameLength = (fn, fnArg) => { 
  return fn(fnArg)  // 8
};
console.log(functionNameLength(originalFunc, 6)); //12


// --------- Callback

const isOdd = (n) => {
  return !!(n % 2);
}
const isEven = (n) => !(n % 2)
  
const printMsg = (cb, num) => {
  const isNumOdd = cb(num);
  console.log(`The number ${num} is an odd number: ${isNumOdd}.`)
}
  
// Pass in isEven as the callback function
printMsg(isOdd, 3);

printMsg(isEven, 3);

console.log(isOdd(3));

// ---Fetch example 
function fetchData(url, callback) {
  fetch(url)
    .then(response => callback(response))
    .catch(error => console.log(`error: ${error}`));
}
  
fetchData('https://google.com&^$^%', function(data) {
  console.log(data);
});

// Arrays methods

const numbers = [1, 2, 3, 4, 5];
numbers.push(6)

const mapHandler = (num, index, arr) => {
  console.log(num, index, arr)
  return num * num
}

const squaredNumbers = numbers.map(mapHandler);

const squaredNumbersArr = numbers.map((num, index, arr) => num ** 2);


console.log(squaredNumbers)
console.log(squaredNumbersArr)

console.log(numbers);



//