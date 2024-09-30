const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  isStudent: true,
  parents: {
    mother: 'Amily',
    father: 'Peter'
  },
  classes: ['Math', 'Philosophy', 'Programing'],
  "his favourite meal": 'Mashed potatoes'
};

console.log(person.parents.father)
console.log(person['parents']['father'])
console.log(person["his favourite meal"])
console.log(person.classes[2])
person.lastName = 'Potapenko';
person.hasPet = true;
console.log(person.hasPet)
delete person.lastName
console.log(person.lastName)


// short props
const wheels = 4;
const maxSpeed = 200;

const car = {
  wheels,
  maxSpeed,
  gainSpeed: function(speedIncreased) {
    this.maxSpeed += speedIncreased
  },
  gainSpeedNewSyntax(speedIncreased) {
    this.maxSpeed += speedIncreased
  }
}
console.log(car)
car.gainSpeed(50);
console.log(car)

const generateRandObject = (key, value = 'SomeValue') => ({[key]: value});
console.log(generateRandObject('MY KEY', 'other value'));




function Person(name, age) {
  this.name = name;
  this.age = age;
}
  
const john = new Person("John", 30);
console.log(john)

/// Optional chaining

const generateObject = (shouldReturnExtrakey) => {
  return shouldReturnExtrakey ?  {
    initialKey: 'SomeValue1',
    extraKey: {
      key1: 'someValue2',
      key2: 'abc'
    },
    logData(){
      console.log(this.initialKey)
    }
  } : {
    initialKey: 'SomeValue1',
  }
}

const resultingoObject = generateObject(true);
console.log(resultingoObject.initialKey)
console.log(resultingoObject?.extraKey?.key1)
console.log(resultingoObject.logData?.())

const resultingoObjectShort = generateObject(false);
console.log(resultingoObjectShort.initialKey)
if(resultingoObjectShort.extraKey){
  console.log(resultingoObjectShort.extraKey.key1)
}
console.log(resultingoObjectShort.extraKey?.key1)

const otherValue = resultingoObject !== undefined && resultingoObject !== null ? resultingoObject.initialKey : 'Default value'
const otherValue2 = resultingoObject && resultingoObject.extraKey && resultingoObject.extraKey.key1;
console.log(otherValue2)

let otherValue3;
if(resultingoObject !== undefined && resultingoObject !== null){
  otherValue3 = resultingoObject.initialKey
}

const optionalValue = '' || 'Default'
const nullishOperator = '' ?? 'Default'
console.log(optionalValue);
console.log(nullishOperator)

