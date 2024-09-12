function outer() {
    let outerVar = 10;

    function inner() {
        console.log(outerVar);
        console.log(process.env.ABC);
    }

    return inner;
}

const closureFn = outer();
console.log(closureFn.name)
closureFn(); // Виведе 10


const range = (a, b) => a > b ? [] : [a, ...range(a+1, b)];

console.log(range(3,6))


const res5 = range(1,5);
console.log(res5)
const multiply = arr => arr.reduce((p, a) => p * a);

const factorial = n => multiply(range(1, n));

console.log(factorial(5));