const promiseA = new Promise(resolve => setTimeout(resolve, 100, 'First'));
const promiseB = new Promise((resolve, reject) => setTimeout(reject, 200, 'Second'));
const promiseC = new Promise(resolve => setTimeout(resolve, 500, 'Third'));

Promise.race([promiseA, promiseB, promiseC])
  .then(x => console.log('Fulfilled: ', x))
  .catch(x => console.log('Rejected: ', x));