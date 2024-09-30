// Object

const name = 'AAAAA'
const person = {
  name: 'Alice',
  // age: 23,
  greet: function() {
    console.log(this);
  }
};

person.greet()

// Function COnstructor (Class)

function Person(name) {
  this.name = name;
  this.greet = function() {
    console.log(`Hello, ${this.name}!`);
  };
}
  
const alice = new Person('Alice');
alice.greet()
const humanQQQQ = new Person('QQQQ');
humanQQQQ.greet()
//   


const obj = {
  text: 'AAA',
  func(){
    console.log(this)
    const obj2 = {
      lastName: 'BBB',
      func2: () => {
        console.log(this)
      },
      func3: function() {
        console.log(this)
      },
      printName: function() {
        console.log(this.lastName)
        setTimeout(() => {
          console.log(this.lastName, 111);
        }, 500);
      }
    }
    return obj2;
  },
  funcArr: () => { console.log(this) }
}


// obj.funcArr()
const obj2 = obj.func()
// obj2.func2()
// obj2.func3()
obj2.printName()

// call / apply / bind
function greet() {
  console.log(`Hello, ${this.name}!`);
}
greet.call({name: 'Name1'})
 
function greetWeather(timesOfDay, weather) {
  console.log(`Good ${timesOfDay}, ${this.lastName}! It's ${weather} today.`);
}
greetWeather.apply({lastName: 'Ostapenko'}, ['day', 'wonderful']);

// 0--------- self callable func IIFE

(function() {
  const message = "Це локальна змінна";
  console.log(message);
})();