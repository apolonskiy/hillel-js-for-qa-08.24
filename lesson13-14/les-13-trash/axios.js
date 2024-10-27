import axios from 'axios';

// const regularAxiosCall = await axios.delete('https://demoqa.com/BookStore/v1/Books', {validateStatus: () => true});
// console.log(regularAxiosCall.data)


const axiosInstance = axios.create({ baseURL: 'https://demoqa.com', validateStatus: () => true });
// const resp = await axiosInstance.get('/BookStore/v1/Books')
// console.log(resp.data);

const generatedToken = await axiosInstance.post('/Account/v1/GenerateToken', {
  "userName": "andrii_1",
  "password": "TestPass1!"
},
{   
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
const token = generatedToken.data.token;

const userId = "2532876c-188b-416f-8e68-a4439b5db706"

const getCurrentUserBearer = await axiosInstance.get(`/Account/v1/User/${userId}`, 
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

console.log(getCurrentUserBearer.data);

const getCurrentUserBasicAuth = await axiosInstance.get(`/Account/v1/User/${userId}`, 
  {
    auth: {
      username: 'andrii_1',
      password: 'TestPass1!'
    }
  });

console.log(getCurrentUserBasicAuth.data);

const getCurrentUserBasicAuth1 = await axiosInstance.getUri( 
  {   url: `/Account/v1/User/${userId}`,
    auth: {
      username: 'andrii_1',
      password: 'TestPass1!'
    }
  });

console.log(getCurrentUserBasicAuth1)
// const fetchResp = await fetch('https://demoqa.com/BookStore/v1/Books');
// console.log(fetchResp)