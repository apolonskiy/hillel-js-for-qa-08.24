// Iterator
function iterator (array) {
  let nextIndex = 0
  return {
    next: function () {
      if (nextIndex < array.length) {
        return {
          value: array[nextIndex++],
          done: false
        }
      }
      return {
        value: undefined,
        done: true
      }
    }
  }
}

const iter =  iterator(['a', 'b', 'c', 'd']);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());