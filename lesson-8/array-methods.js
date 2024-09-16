// split
const sentence = "Це&nbspречення&nbspмає кілька слів";
const words = sentence.split(" ");

console.log(words); // ["Це", "речення", "має", "кілька", "слів"]

const url = 'https://lms.ithillel.ua/groups/6655bf70fe3ba91f79139a32/lessons/6655bf70fe3ba91f79139a47';
const splittedUrl = url.split('/')
console.log(splittedUrl);

// join()

const joinedUrl = splittedUrl.join('/')
console.log(joinedUrl)

const sentenceRejoined = sentence.split('&nbsp').join(' ')
const sentenceReplaced = sentence.replace(/&nbsp/gi, ' ')
console.log(sentenceRejoined)

console.log(sentenceReplaced)

//indexOf
console.log(splittedUrl.indexOf('groups1'));

// includes 
const colors = ["червоний", "зелений", "синій"];
const hasGreen = colors.includes("червоний");
console.log(hasGreen); // true

//push 
const stack = [1, 2];
stack.push(3, 4, 'a'); // ...args
console.log(stack); // [1, 2, 3, 4]

// pop()

// function pop() {
//     const res = this.array[this.array.lenght -1]
//     this.array =  //short by 1
//     return res;
// }

const stack2 = [1, 2, 3, 4];
const poppedValue = stack2.pop();
console.log(poppedValue); // 4
console.log(stack2); // [1, 2, 3]

console.log(url.split('/').pop());

// shift / unshift
const queue = ["A", "B", "C"];
const shiftedValue = queue.shift();
console.log(shiftedValue); // "A"
console.log(queue); // ["B", "C"]

queue.unshift("A", "Z");
console.log(queue); // ["A",'Z', "B", "C"];