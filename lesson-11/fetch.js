

// fetch('https://swapi.dev/api/planets/1/')
//     .then(res => {return res.json()})
//     .then(json => {console.log(json)})
//     .catch(err => {console.log('MY ERROR:',err)});



// const fetchHandler = async() => {
//    console.time('event')
//     const res1 = await fetch('https://swapi.dev/api/planets/1/')
//     // console.log(res1)
//     console.log(await res1.json())

//     const res2 = await fetch('https://swapi.dev/api/planets/2/')
//     console.log(await res2.json())

//     const res3 = await fetch('https://swapi.dev/api/planets/3/')
//     console.log(await res3.json())

//     try {
//         const res4 = await fetch('https://swapi.dev/api/planets/4/')
//         console.log(await res4.json())
//         console.timeEnd('event')
//     } catch(err) {
//         console.log
//     }

//     console.time('2nd')
//     const initArr = [1,2,3,4];
//     const reqArr = initArr.map(ind => fetch(`https://swapi.dev/api/planets/${ind}/`).then(res => res.json()))
//     const resArr = await Promise.all(reqArr)
//     console.log(resArr);
//     console.timeEnd('2nd')
// }

 
// fetchHandler()


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
        return response.json();
    }

    async handleFetchUrl(){
        try {
            const fetchResult = await this.#fetchUrl()
            return fetchResult
        } catch (err) {
            return err

        }
    }
}

const fetchCall = async () => {
    const fetchGetPlanet1 = new FetchHandler('https://swapi.dev/api/planets/7/', 'GET');
    console.log(await fetchGetPlanet1.handleFetchUrl())
    console.log('STILL WORKS')
}

fetchCall()