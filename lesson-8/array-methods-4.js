// sort
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); //  ["Dec", "Feb", "Jan", "March"]

const numbers = [5,7,3,347,474,4, 4, 3325,36];
numbers.sort()
console.log(numbers)
// numbers.sort((a, b) => {
//     if (a < b ) {
//         console.log(a, b)
//         return -1;
//       } else if (a > b) {
//         console.log(a, b)
//         return 1;
//       }
//       console.log('did not move', a, b)
//       // a must be equal to b
//       return 0;
// })
numbers.sort((a,b) => b - a)

console.log(numbers)


const fruits = ['banana', 'apple', 'orange', 'grape'];
console.log('banana'.localeCompare('bbnana'))
fruits.sort((a, b) => b.localeCompare(a));
console.log(fruits);

// object sorting
const data = [
    { lastLoginAt: 1637299200, name: 'Alice' },
    { lastLoginAt: 1638405600, name: 'Bob' },
    { lastLoginAt: 1638387200, name: 'Charlie' }
  ];
  
  // Функція сортування
  function sortByDateUnix(field) {
      return (a, b) => {
          if (a[field] < b[field]) {
              return -1;
          }
          if (a[field] > b[field]) {
              return 1;
          }
          return 0;
      };
  }
  
  data.sort(sortByDateUnix('lastLoginAt')); // Сортування за полем 'field' у порядку зростання

//   data.sort((a, b) => b['lastLoginAt'] - a['lastLoginAt']); // Сортування за полем 'field' у порядку зростання
  console.log(data);

  // reverse
const numbersRev = [1, 2, 3, 4, 5];
numbersRev.reverse(); 
console.log(numbersRev)

// reduce
const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce((accumulator, currentValue) => {
    // initialValiue (5) + accumulator += currentValue
    return accumulator + currentValue
}, 5);
console.log(sum)

// some and every

const numbersSome = [1, 2, 3, 4, 5];
const hasEvenNumber = numbersSome.some((number) => number > 0); // true
console.log(hasEvenNumber);

const allEvenNumbers = numbersSome.every((number) => number > 1); // true
console.log(allEvenNumbers);