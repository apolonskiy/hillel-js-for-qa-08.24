// let count = 0;
// while (count < 3) {
//     console.log(count); // Виведе числа 0, 1, 2
//     count++;
// }

let isVisible = isElementVisible();
let counter = 0;
while (!isVisible && counter < 30) {
  // sleep(500) ms;
  isVisible = isElementVisible();
  counter++;
}

let count = 4;
do {
  console.log(count); 
  count++;
} while (count < 3)