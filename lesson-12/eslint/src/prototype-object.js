// Створення об'єкта "прототипу"
const animalPrototype = {
  speak() {
    console.log(`${this.name} says ${this.sound}`);
  }
};
  
// Створення об'єкта, який успадковує прототип
const dog = {
  name: "Dog",
  sound: "Woof"
};
dog.__proto__ = animalPrototype;
  
// Виклик методу від успадкованого прототипу
dog.speak(); // Dog says Woof
console.log(dog.__proto__)

const mikeDog = {
  address: 'Stree Sesame, 5',
  name: 'Mike The Dog',
  __proto__: dog
}


mikeDog.speak()
console.log(mikeDog.__proto__)


///------
const user = {
  login() {
    return true;
  }
}

const person = {
  name: 'John',
  age: 42,
  __proto__: user
};

console.log(Object.getPrototypeOf(person)); // user
console.log(person.isPrototypeOf(user)); // true