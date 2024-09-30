const colors = ['red', 'green', 'blue', 'yellow'];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]); // Виведе всі числа з масиву
}

// for .. of
for(const col of colors){
  console.log(col)
}

/// Primitives vs Objects in ssigning values

let value1 = 'Str1';
let value2 = value1; //Str1 WIHTOU pointing to value1

value2 = 'NewStr1';
console.log(value1, value2);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1; // [1,2,3,4,5] as LINK to arr1

arr2[2] = 'STR'
console.log(arr1)
console.log(arr2)