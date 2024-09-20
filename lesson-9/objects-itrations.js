const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };


// for(const prop of person){
//     console.log(prop)
//   }

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

const objectValues = Object.values(person);
console.log(objectValues)

for(const value of objectValues){
    console.log(value)
}

const objectKeys = Object.keys(person)

for(const key of objectKeys){
    console.log(key)
}

const objectEntries = Object.entries(person)
console.log(objectEntries)

// ---- hasOwnProperty
const human = {
    isHuman: true,
    alive: true
  }

const girl = Object.create(human);
girl.gender = 'Female';
girl.age = 8;

console.log(human.__proto__)
console.log(girl.__proto__)

console.log(girl.hasOwnProperty("alive"))

console.log(girl)

for(const key in girl){
    if(girl.hasOwnProperty(key)){
        console.log(girl[key])
    }
}