// const variable1 = 'SomeText';
// let variable2 = 333;
var variable3 = null;

// const arrFuncSum = (a, b) => {
//     // const variable1 = 'New Value'
//     // console.log(variable1);
//     // let variable2 = 111;
//     // console.log(variable2);
//     // variable2 = 666;
//     // console.log(variable2);
//     console.log(variable3);
//     var variable3 = undefined;
//     return a + b
// }

function arrFuncSum (a, b) {
    // const variable1 = 'New Value'
    // console.log(variable1);
    // let variable2 = 111;
    // console.log(variable2);
    // variable2 = 666;
    // console.log(variable2);
    console.log(variable3);
    var variable3 = undefined;
    return a + b
}
// console.log(variable2);

console.log(variable3);

// var variable3 = undefined;

arrFuncSum()

console.log(variable3);


// variable2 = arrFuncSum(123, 456)
// console.log(variable2);

// console.log(variable1)

// --------------------------------------
// EARLY RETURN

const Console = {
    log(ars){
        process.stdout.print(ars)
    }
}

// function concatStrings(str1, str2) {
//     if(!str1 || typeof str1 !== 'string') {
//         return console.log('First string arg is missing, stopping func exec');
//     }
//     if(!str2 || typeof str2 !== 'string'){
//         console.log('Second string arg is missing, stopping func exec');
//         return;
//     }
//     return str1.concat(str2) // `${str1} ${str2}`
// }

// console.log(concatStrings(2, 'sdfg'))

const fruitType = (plant) => {
    switch (plant) {
        case 'Apple':
        case 'Plum':
        case 'Pear':
            return 'Fruit';
        case 'Tomato':
            return 'Vegy'
            break;
        default:
            break;
    }
}

console.log(fruitType('Apple'))

const plant = 'Apple'
let result = ''
switch (plant) {
    case 'Apple':
    case 'Plum':
    case 'Pear':
        result  = 'Fruit';
        break;
    case 'Tomato':
        result = 'Vegy'
        break;
    default:
        break;
}

console.log(result)