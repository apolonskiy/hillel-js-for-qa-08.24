// function multiply(num1, num2) {
//     console.log(num1, num2)
//     // let num1 = num1Value;
//     // let num2 = num2Value;
//     // num1 = 5;
//     return num1 * num2;
// }
// console.log(multiply(2, 3, 5));


// const verifyIfVisible = (initialState) => {
//     if(!initialState){
//         initialState = someWaitFunc();
//     }
// }

// const concatPhrase = (lastName, guest = 'User', age = 25) => {
//     return `Wellcome, ${guest} ${lastName}, your age it ${age}`
// }

// console.log(concatPhrase('Ostapenko'))

// const navItemSelector = (navType = 'news') => {
//     return `[data-test="nav-bar-${navType}"]`
// }

// console.log(navItemSelector('lectures'));

// REST params _______________________________

// function restArgs(arg1, arg2 = 'ss', ...zalyshok){
//     console.log(arg1, arg2)
//     console.log(zalyshok);
// }

// const arrFunRest =  (arg1, arg2 = 'ss', ...zalyshok) => {
//     console.log(arg1, arg2)
//     console.log(zalyshok);
// }

// restArgs(1,undefined, 3,'abc','RRR',NaN)

// arguments in function _______________________________
// const arrFuncArgs = () => {
//     console.log(arguments);
// }

// arrFuncArgs(1,2,3,4,5)

// const functionClassicArgs = function(arg1) {
//     console.log(arg1)
//     console.log(arguments);
// }

// functionClassicArgs('1,2,3,4,5', 'EEEE', 666)

// function functionClassic2Args() {
//     console.log(arguments);
// }

// functionClassic2Args(1,2,3,4,5)