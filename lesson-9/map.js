const mapKeyObject = {test: 'someValue'}
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key1', 'value2');
myMap.set('someKey', 'ABC');
myMap.set(mapKeyObject, 'ABC');

console.log(myMap);
// myMap.delete('key1');
console.log(myMap.get(mapKeyObject)) // 'value1')

for(const [key, value] of myMap){
    console.log(key);
    console.log(value)
}

console.log({} == {})