const originalObject = { name: 'John', age: 30 };
const pointer = originalObject;

pointer.name = 'TTT'
console.log(originalObject)
const objCopy = {...originalObject}

// multi level object copy
const obj1 = {
    name: 'aaa',
    value: 2,
    internalObject: {
        veryIngernalObject: {
            key: 1,
            key2: 'value'
        },
        someText: 'text'
    }
}

const obj1Copy = {...obj1};
// obj1Copy.internalObject.someText = 'TTTT'
console.log(obj1);

const copyDeep1 = JSON.parse(JSON.stringify(obj1));
copyDeep1.internalObject.someText = 'TTTT'
console.log(obj1);

const copyDeep2 = structuredClone(obj1);
copyDeep2

copyDeep2.internalObject.veryIngernalObject.key = 'TTTT'
console.log(obj1);
console.log(copyDeep2)

