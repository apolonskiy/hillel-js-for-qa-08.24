import axios from 'axios';

test('POST /Account/v1/User invalid payload', async() => {
    const response = await axios.post('https://demoqa.com/Account/v1/User', {email: 'qwe@we.com', passwort: 'password'}, {validateStatus: () => true});
    expect(response.status).toBe(400);
    expect(response.data.code).toBe('1200')
    expect(response.data.message).toBe('UserName and Password required.')
})

test('POST /Account/v1/User invalid payload', async() => {
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