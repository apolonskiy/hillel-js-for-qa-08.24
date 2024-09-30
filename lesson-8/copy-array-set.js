// copy with slice
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = originalArray.slice();
copiedArray[0]='abc'
console.log(copiedArray)
console.log(originalArray)

// concat
const copiedArrayConcat = [].concat(originalArray);
copiedArrayConcat[2]= 555
console.log(copiedArrayConcat)
console.log(originalArray)

// copied spread
const copiedArraySpread = [...originalArray];
copiedArraySpread.push('vvv')
console.log(copiedArraySpread)
console.log(originalArray);

// Array.from

const copiedArrayArrayFrom = Array.from(originalArray);
copiedArrayArrayFrom.push('JGHDJGHJD')
console.log(copiedArrayArrayFrom)
console.log(originalArray);

// deep and shalow copy
const deepArray = [[1, 2], 3, [4, 5], 6, {key: 'valye', key2: 'value'}];
const shallowCopy = [...deepArray];
const deepCopy = JSON.parse(JSON.stringify(deepArray));
const deepCopyStructuredClone = structuredClone(deepArray);
// shallowCopy[1]='NEW VALUE';
// shallowCopy[0][1] = 'THIS IS NOT PRIMITIVE'
// shallowCopy[4]['key'] = 'AGAIN'
deepCopy[4]['key'] = 'NOW IT WORKS'
deepCopyStructuredClone[4]['key'] = 'DEEP STRUCTURE'

console.log(deepArray)
console.log(shallowCopy)

// JSON.parse(JSON.stringify())

console.log(deepCopy)
console.log(deepCopyStructuredClone)

const ojbUser = {
  user: {
    email: 'aa@aa.com',
    userName: 'aa'
  }
}

//...
const userCopy = ojbUser;
delete userCopy.user.email;
console.log(ojbUser)

console.log(userCopy === ojbUser)

/// Set 
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueValues = [...new Set(arr)]; // [1, 2, 3, 4, 5]
console.log(new Set(['a', 'a', 'b', 'c', 4]));