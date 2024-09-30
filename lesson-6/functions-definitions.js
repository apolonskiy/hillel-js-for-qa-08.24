console.log(sum(1, 2))

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4));

const multiply = function(a, b) {
  return a * b;
}
console.log(multiply(3, 4));

const arrDivide = (a, b) => a/b;

console.log(arrDivide(3, 4));

const arrDivideReturn = (a, b) => {
  return a/b
}

console.log(arrDivideReturn(6, 2));

const obj1 = {
  name: 'Alex',
  printName: function(){
    console.log(this.name)
  },
  printNameArrow: () => {
    console.log(this.name)
  }
}

obj1.printName()
obj1.printNameArrow()