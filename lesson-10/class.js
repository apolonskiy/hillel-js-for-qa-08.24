function AnimalExample(name) {
    this.name = name
}
console.log(AnimalExample)

class NoConstruct {
    name = 'NoCostruct';
}
console.log(NoConstruct)

const noConstructEx = new NoConstruct();
console.log(noConstructEx.name);
let count = 0

class Animal {
    sound = 'Breath';
    #legs = 4;
    _ears = 2;
    constructor(name = 'Animal', legs) {
        this.name = name;
        this.#legs = legs
        count++;
    }

    produceSount() {
        console.log(`${this.name} which has ${this.#legs} says ${this.#getSoung()}`)
    }

    #getSoung() {
        return this.sound;
    }

    _getEarsCount(){
        return this._ears
    }

    get legsCount(){
        return this.#legs
    }

    set legsCount(legs){
        this.#legs = legs
    }

    static isAlive(){
        return `Animals are alive, ${count}`;
    }
}

const animal = new Animal(undefined, 4);
console.log(animal.produceSount())
console.log(animal._getEarsCount())
console.log(animal.legsCount)
animal.legsCount = 2
console.log(animal.legsCount)
console.log(Animal.isAlive());

const num = 4
console.log(num.toString())