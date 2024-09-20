// objects

const person = {
    name: "John",
    age: 30,
    gender: "male"
  };

  const personName = person.name;
  const name = 'MyName'

  const {name: personalisedName, age, favMeal = 'Kasha'} = person;
  console.log(name, age, favMeal, personalisedName);

  const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 }
  ];

for(const {name: cycleName} of people) {
    console.log(cycleName)
}

const func = (num = 5) => num * 2
console.log(func())

const handleObje = ({test} = {test: 'DevaultValue'} ) => {
    console.log(test);
}

handleObje('sdgsdg')

const personMultiLevel = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      country: "USA"
    }
  };

  const { address } = personMultiLevel
  const { city }  = address
  console.log(city, address)
  console.log(personMultiLevel)

  // arrays
const numbers = [1, 2, 3];

const [first, , third, fourth = 4] = numbers;
console.log(first,  third, fourth);

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a); // 2
// console.log(b); // 1

let a = 1;
let b = 2;
let tmp = a;
a = b;
b = tmp

console.log(a); // 2
console.log(b); // 1
