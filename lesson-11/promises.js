const promise1 = (decider) =>  new Promise((resolve, reject) => {
  if(decider){
    resolve('Success');
  } else {
    reject('Failure')
  }
});

promise1(false)
  .then(res => {
    console.log(res)
    return new Promise((res, rej) => res('ONE MORE PROMISE'))
  })
  .then(res => {console.log(res)})
  .catch(err => {console.log(err)})
  .finally(() => {
    console.log('finally');
  })


const promiseSuccess1 = promise1(true).then(res => res).catch(err => err);
const promiseSuccess2 = promise1(true).then(res => res).catch(err => err);
const promiseFailure = promise1(false).then(res => res).catch(err => err);
const promisesCollection = Promise.all([promiseSuccess1, promiseSuccess2, promiseFailure])
  .then(res => {return res})
promisesCollection.then(res => {console.log(res)})

// (async() => {
//     console.log('sss')
//     const res = await Promise.all([promiseSuccess1, promiseSuccess2, promiseFailure])
//     console.log(res);
// })()



const promise2 = (decider, timer = 1000) =>  new Promise((resolve, reject) => {
  if(decider){
    setTimeout(resolve, timer, 'SUCCESS');
  } else {
    setTimeout(reject, timer, 'SOME ERROR');
  }
});

const promiseSuccess21 = promise2(true, 100)
const promiseSuccess22 = promise2(true, 200)
const promiseFailure2 = promise2(false, 50)
const promisesCollection2 = Promise.all([promiseSuccess21, promiseSuccess22, promise2(false, 300)])
promisesCollection2
  .then(res => {console.log(res)})
  .catch(err => {console.log(err)})

const promisesAllSettled = Promise.allSettled([promiseSuccess21, promiseSuccess22, promise2(false, 400)])
promisesAllSettled
  .then(res => {console.log(res)})

const promisesRace = Promise.race([promiseSuccess21, promiseSuccess22, promiseFailure2])
promisesRace
  .then(res => {console.log(res)})
  .catch(err => {console.log(err)})


const promisesAny = Promise.any([promiseSuccess21, promiseSuccess22, promiseFailure2])
promisesAny
  .then(res => {console.log(res)})
  .catch(err => {console.log(err)})