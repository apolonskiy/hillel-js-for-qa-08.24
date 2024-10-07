import Account from '../apiClient/endpoints/Account';
import { faker } from '@faker-js/faker';
let accountApi;
let createUserPayload;
let token;
let userId;

describe('Account tests', () => {
  beforeAll(async() => {
    accountApi = new Account();
    createUserPayload = {
      userName: faker.internet.userName(),
      password: 'TestPass_1!'
    };
    const resp = await accountApi.createUser(createUserPayload);
    expect(resp.status).toEqual(201);
    expect(resp.data.userID).toBeDefined();
    expect(resp.data.username).toEqual(createUserPayload.userName);
    expect(resp.data.books).toStrictEqual([]);
    userId = resp.data.userID;
    await new Promise((res) => setTimeout(res, 2000));

    const respToken = await accountApi.generateToken(createUserPayload);
    expect(respToken.status).toEqual(200);
    expect(respToken.data.token).toBeDefined();
    expect(respToken.data.expires).toBeDefined();
    expect(respToken.data.status).toEqual('Success');
    expect(respToken.data.result).toEqual("User authorized successfully.");
    token = respToken.data.token;
  })

  afterAll(async() => {
    await accountApi.cleanUp();
  })

  test('Cannot create user with existing username', async ()=> {
    const resp = await accountApi.createUser(createUserPayload);
    expect(resp.status).toEqual(406);
    expect(resp.data.message).toEqual('User exists!');
  });

  test('Can verify that user is logged in succeesfully', async ()=> {
    const resp = await accountApi.isAuthorized(createUserPayload);
    expect(resp.status).toEqual(200);
    expect(resp.data).toEqual(true);
  });

  test('Can verify that user is not logged in if does not exist', async ()=> {
    const notExistingUser = {...createUserPayload};
    notExistingUser.userName = faker.internet.userName();
    const resp = await accountApi.isAuthorized(notExistingUser);
    expect(resp.status).toEqual(404);
    expect(resp.data.message).toEqual('User not found!');
  });

  test('Can verify that user is not logged in if exists', async ()=> {
    const newUserPayload = {
      userName: faker.internet.userName(),
      password: 'TestPass_1!'
    }

    const respCreate = await accountApi.createUser(newUserPayload);
    expect(respCreate.status).toEqual(201);
    const resp = await accountApi.isAuthorized(newUserPayload);
    expect(resp.status).toEqual(200);
    expect(resp.data).toEqual(false);
  });

  test('Can GET existing user successfully', async ()=> {
    const resp = await accountApi.getUserById(userId, {Authorization: `Bearer ${token}`});
    expect(resp.status).toEqual(200);
    expect(resp.data.userId).toEqual(userId);
    expect(resp.data.username).toEqual(createUserPayload.userName);
    expect(resp.data.books).toStrictEqual([]);
  });

  test('Cannot GET existing user without auth', async ()=> {
    const resp = await accountApi.getUserById(userId, {Authorization: `Bearer abc`});
    expect(resp.status).toEqual(401);
    expect(resp.data.message).toEqual("User not authorized!");
  });


  test('Cannot GET not existing user with auth', async ()=> {
    const resp = await accountApi.getUserById('YRTYUTYUvc64563546', {Authorization: `Bearer ${token}`});
    expect(resp.status).toEqual(401);
    expect(resp.data.message).toEqual("User not found!");
  });

  test.failing('Cannot DELETE not-existing user', async ()=> {
    const resp = await accountApi.deleteUser('YRTYUTYUvc64563546', {Authorization: `Bearer ${token}`});
    expect(resp.status).toEqual(404);
    expect(resp.data.message).toEqual("User Id not correct!");
  });

  test('Cannot DELETE existing user without proper auth', async ()=> {
    const resp = await accountApi.deleteUser(userId, {Authorization: `Bearer abc`});
    expect(resp.status).toEqual(401);
    expect(resp.data.message).toEqual("User not authorized!");
  });

  test('Can DELETE existing user', async ()=> {
    const resp = await accountApi.deleteUser(userId, {Authorization: `Bearer ${token}`});
    expect(resp.status).toEqual(204);
    // expect(resp.data.message).toEqual("User Id not correct!");

    const respGet = await accountApi.getUserById(userId, {Authorization: `Bearer ${token}`});
    expect(respGet.status).toEqual(401);
    expect(respGet.data.message).toEqual("User not found!");
  });

})