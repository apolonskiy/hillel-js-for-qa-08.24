// const age = 68;
//     if(age < 70) {
//         throw new Error('Yound man, too young!')
//     }
//     console.log(age);

const strSubtsring = (str) => str.substring(0, 3);

// const mySubStr = strSubtsring();
// console.log(mySubStr);
//...

try {
  const mySubStr = strSubtsring()
  console.log(mySubStr);
} catch(e) {
  console.log(e.message);
}
console.log('code still works')

// -------

// try  {
//     const age = 68;
//     if(age < 70) {
//         throw new Error('Yound man, too young!')
//     }
//     console.log(age);
// } catch (error) {
//     console.error(`SOME ERROR ${error}`);
// }
// console.log('still works!')