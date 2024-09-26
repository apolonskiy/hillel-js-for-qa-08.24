


// (async() => {
//     const res = await fetch('https://swapi.dev/api/planets/1/');
//     console.log( await res.json());
// })()

//-----------------------------------------------------------------------------
// const main = async() => {

//     const myTestPromise = (decider) => new Promise((resolve, reject) => {
//         if(decider){
//             setTimeout(() => resolve('SuCCESS'), 1000)
//         } else{
//             setTimeout(() => reject('FAILURE'), 1000) 
//         }
//     })
    
    
//     const promiseHandler = (decider) => {
//         return myTestPromise(decider)
//                                 .then(res =>  res)
//                                 .catch(err => err)
        
    
//     }
//     console.time('for')
//     for(let i = 1; i < 5; i++){
//         const result = await promiseHandler(i % 2)
//         console.log(result)
//     }
//     console.timeEnd('for')

    
    
//     console.time('promise')
//     const promiseArray = [1,2,3,4].map(num => promiseHandler(num % 2));
//      Promise.all(promiseArray).then(res => {console.log(res)})
//     const resArr = await Promise.all(promiseArray)
//     // console.log(resArr);
//     console.timeEnd('promise')
// }
// main()
//-----------------------------------------------------------------------------


// const fetchHandler = async() => {
//    console.time('event')
//     const res1 = await fetch('https://swapi.dev/api/planets/1/')
//     console.log(await res1.json())

//     const res2 = await fetch('https://swapi.dev/api/planets/2/')
//     console.log(await res2.json())

//     const res3 = await fetch('https://swapi.dev/api/planets/3/')
//     console.log(await res3.json())

//     const res4 = await fetch('https://swapi.dev/api/planets/4/')
//     console.log(await res4.json())
//     console.timeEnd('event')



//     console.time('2nd')
//     const initArr = [1,2,3,4];
//     const reqArr = initArr.map(ind => fetch(`https://swapi.dev/api/planets/${ind}/`).then(res => res.json()))
//     const resArr = await Promise.all(reqArr)
//     console.log(resArr);
//     console.timeEnd('2nd')
// }

 
// fetchHandler()

//-----------------------------------------------------------------------------



async function errorHandling(isValidUrl) {
    try{
        const res1 = await fetch(isValidUrl ? 'https://swapi.dev/api/planets/1/' : 'sdgdsg');
        // if(res1.status !== 200) throw new Error('Fetch request failed!' + res1.err);
        return res1.json()
    } catch(err){
        return err.stack
    }
}

async function callErrorHandling(isValidUrl) {
    const result = await errorHandling(isValidUrl)
    console.log(result)
}
// callErrorHandling(true)
callErrorHandling(false)
console.log('111')

class FetchHandler {
    constructor(url, method, headers = {}){
        this.url = url;
        this.method = method;
        this.headers = headers
    }

    async #fetchUrl(){
        const response = await fetch(this.url, {
            method: this.method,
            headers: this.headers
        });
        const responseJson = await response.json();
        return responseJson
    }

    async handleFetchUrl(){
        try {
            const fetchResult = await this.#fetchUrl()
            return fetchResult
        } catch (err) {
            return err.stack

        }
    }
}

const fetchCall = async () => {
    const fetchGetPlanet1 = new FetchHandler('https:', 'GET');
    console.log(await fetchGetPlanet1.handleFetchUrl())
}

fetchCall()