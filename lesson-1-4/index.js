// NPM INIT, LOCK FILE, GITIGNORE, STRUCTURE OF DEPENDENCIES IN NODE_MODULES
// npm pack / npm publish 
// npmrc file + lock file config

// NPM SCRIPTS

// IMPORT / EXPORT (CommonJs and ESM)

// ЗМІННІ, ЇХ ВИЗНАЧЕННЯ І ІНІЦІАЛІЗАЦІЯ, ОБЛАСТІ ВИДИМОСТІ

// Math та інші глобальні об'єкти / Класи (конструктор функції)

// Строки, різні кавички, екранування, шаблонні строки

// Порівняння

// Перетворення (явні і неявні)

// class AAA {
//     alex = {
//         name: 'Alex',
//         getName: () => {
//             return this
//         },
//         getName2() {
//             return this
//         },
//     }
// }

// const aaa = new AAA();
// console.log(aaa.alex.getName());
// console.log(aaa.alex.getName2());

// console.log('test "qqq"');
// console.log("test 'qqq'")
// console.log('test \'test\'')


// export const testName = 1;

// const strEx = new String('testStrEx')
// console.log(strEx.toString())

// console.log(0 ?? 'test')

// console.log(Boolean('ss'))
// // ==
// console.log(!!'ss')

// const ternary = 1 >2 ||true && false ? 'truthy result' : 'falsy result'
// console.log(ternary)

// console.log(test3);

// const test1 = 'test1';

// // console.log(func1())
// // console.log(func2())
// console.log(func3())
// // ----------

// var test3 = 'test3';
// let test2 = 'test2';

// const func1 = () => {
//     console.log(test1);
//     const test4 = 'test4';
//     test2 = 'test6';
//     console.log(test2)
//     var test3 = 'test5';
// }

// const funcArr = (arg) => arg > 3 ? 'truthy' : 'falsy';
// console.log(funcArr(4))


// const func2 = function () {
//     console.log('func2')
// }

// function func3() {
//     console.log('func3');
//     return 'func3';
// }


// // let test2 = 'test7';
// func1();

// console.log(test3)

// const quotes1 = 'quetes \'test2\' "test" ';
// const quotes2 = "quetes 'test' ";

// const str1 = 'test1 ' + quotes1 + 'my life';
// const str2 = 'test1'.concat(quotes1);

// const userName = 'Andrii';
// const templateLiteral = `Welcome back, ${userName}!`


// console.log('7' + 3 + 5);
// console.log('7' - '3' + 5);
// console.log('7a' + 3 - 5);


// console.log(0 || 4 || 1);

// console.log(true && true); 
// console.log(1 * 1);

// console.log(false && true);
// console.log(0 * 1);

// console.log(!0);// == console.log(Boolean(!0));

// console.log(!null)

// console.log(!!0)

// console.log(0 ?? 'test');

let abc = 4;

// abc = abc + 2;

abc /= 3 // abc = abc / 3



let right = 4;
let left = 4;

console.log(right++);
console.log(right);
console.log(++left)

const promptValueAge = '67';

console.log(typeof(Number(promptValueAge)) === 'string' )

console.log(Number(promptValueAge) + 18)

console.log(+true)

//-----------
// Приклад з уроку з областю видимості, те на чому запнувся

const testInFunc = 'qqq';

const func = () => {
    // console.log(testInFunc); // поки це посилається на конст ПОЗА функцією
    const testInFunc = 'www'; // як тільки ми кажемо, що у нас є новий const з цим же іменем, то ми вважаємо що в цьому блоку він єдиний,  виклик вище кидає помилку
    console.log(testInFunc);
    // можете покоментити одну чи інше, побачити як вон опрацює
}

func()