import axios from 'axios';

describe('Account tests', () => {
    test('POST /Account/v1/User invalid payload', async() => {
        const response = await axios.post('https://demoqa.com/Account/v1/User', {email: 'qwe@we.com', passwort: 'password'}, {validateStatus: () => true});
        expect(response.status).toBe(400);
        expect(response.data.code).toBe('1200')
        expect(response.data.message).toBe('UserName and Password required.')
    })

    test('POST /Account/v1/Token Valid', async() => {
        const response = await axios.post('https://demoqa.com/Account/v1/GenerateToken', 
                {
                    userName: 'andrii_1',
                    password: 'TestPass1!'
                }, {validateStatus: () => true});
        expect(response.status).toBe(200);
        expect(response.data.token).toBeDefined()
        expect(typeof response.data.token).toBe('string')
        expect(response.data.expires).toBeDefined()
        expect(response.data.status).toBeDefined()
        expect(response.data.result).toBeDefined()

    })

    // test('GET Books', async() => {
    //     const instance = axios.create({baseURL: 'https://api.restful-api.dev/objects/7'});
    //     instance.interceptors.response
    //     .use((res) => {
    //         console.log(res.data);
    //         res.data.id = '9'
    //         return res;
    //     }, (err => {
    //         console.log(err);
    //         return Promise.reject(err);
    //     }));
    //     const response = await instance.get('');
    //     const expectedItem =     {
    //   id: '7',
    //   name: 'Apple MacBook Pro 16',
    //   data: {
    //     year: 2019,
    //     price: 1849.99,
    //     'CPU model': 'Intel Core i9',
    //     'Hard disk size': '1 TB'
    //   }
    // }
    //     expect(response.status).toBe(200);
    //     expect(response.data).toStrictEqual(expectedItem);
    // })
})
