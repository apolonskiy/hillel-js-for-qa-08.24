// function foo() {
//     console.log("foo");
//     bar();
//   }
  
//   function bar() {
//     console.log("bar");
//   }
  
//   foo();



// function foo() {
//     console.log('attempt')
//   foo(); // Рекурсивний виклик
// }

// foo(); // Призведе до переповнення стеку

const mathCount = (sum, divider, subDiv) => {
  const subResult = subDivider(divider, subDiv);
  const result = sum / subResult;
  return result
}

function subDivider(divider, subDiv) {
  return divider / subDiv
}

console.log(mathCount(100, 40, 20))