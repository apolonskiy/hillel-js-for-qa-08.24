class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  
  speak() {
    console.log(`${this.#private()} says ${this.sound}`);
  }

  #private(){
    return this.name;
  }
}

const animal = new Animal('Animal', 'Breathe');
console.log(animal.speak())
  
class Dog extends Animal {
  constructor(name, master) {
    super(name, "Woof");
    this.master = master;
  }

  play(){
    return `Dog plays, dogs name is ${this.name}`
  }
}

class DogNoConstructor extends Animal {
  legs = 4;
  speak() {
    return 'I dont speak'
  }
}
  
const dog = new Dog("Dog");
dog.speak(); // Dog says Woof
console.log(dog.play());

const dogNoConstructor = new DogNoConstructor('Dog', 'Gav')
console.log(dogNoConstructor.speak())