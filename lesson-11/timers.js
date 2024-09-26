let result = ''
function saySmth(phrase, name, cb) {
    result = '123'
    cb()
    console.log(`${phrase} ${name}! ${result}`);
}
saySmth()
console.log('BeforeTimer')
setTimeout(saySmth, 0, 'Hello', 'John');
// setTimeout(saySmth, 1000, 'Hello', 'John');
console.log('AFTER timer')
console.log(result)

const timer1 = setTimeout(saySmth, 5000, 'Hello', 'John');
clearTimeout(timer1);


// setInterval(saySmth, 1000, 'Hello', 'John');