// const isAdult = true;

// const age = 78;
// const isOld = age > 60;

// if (age > 60) {
//     console.log('Grown up');
// } else {
//     console.log('Young');
// }
// const ageDescription = age > 60 ?  'Grown up' : 'Young';
// console.log(ageDescription)

// ---------------

// const isAdult = true;

// console.log(true || false)
// const age = 50;
// if (age > 60 && age <= 70) {
//     console.log('Grown up');
// } else if (age > 70) {
//     console.log('Old man');
// } 
// else {
//     console.log('Young');
// }

// --------------

const isAdult = true;

console.log(true || false)
const age = 78;
if (age > 30) {
  console.log('Grown up');
  if(age > 50) {
    console.log('senior');
    if(age > 70) {
      console.log('old');
    } else {
      console.log('not old enough')
    }
  } else {
    console.log('not seniour enough')
  }
} else {
  console.log('Young');
}
