/* eslint-disable playwright/no-conditional-expect */
/* eslint-disable playwright/no-conditional-in-test */
import { test, expect } from '@playwright/test';
import { CarsApi, getRandomCarData } from '../../src'

/** *
* @type {import('../../src').CarsApi}
*/
let carsApi;
test.describe('Cars API tests', () => {
  test.beforeEach(async ({ baseURL, request, context }) => {
    carsApi = new CarsApi(request, context, baseURL);
  })

  test.afterAll(async() => {
    const allCarsResp = await carsApi.getCars();
    const allCarsData = (await allCarsResp.json()).data
    console.log(allCarsData);
    for await(const { id } of allCarsData){
      await carsApi.deleteCar(id);
    }
  })

  test('Can create new car - positie test', { tag: '@api' }, async({ }) => {
    const carData = getRandomCarData()
    const response = await carsApi.addCar(carData)
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toEqual(201);
    const respData = await response.json()
    const carBrandsResp = await carsApi.getCarBrands();
    const carBrandData = (await carBrandsResp.json()).data.find(({ id }) => id === respData.data.carBrandId);
    const carModelResp = await carsApi.getCarModel(carBrandData.id);
    const carModelData =  (await carModelResp.json()).data.find(({ id }) => id === respData.data.carModelId);

    expect(respData.data.brand).toEqual(carBrandData.title);
    expect(respData.data.model).toEqual(carModelData.title);
    expect(respData.data.initialMileage).toEqual(carData.mileage);
  })
  test('Can get and delete all cars', { tag: '@api' }, async({ }) => {
    const response = await carsApi.getCars()
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toEqual(200);
    const respJson = await response.json();
    console.log('respJson.data.length', respJson.data.length);
    if(respJson.data.length){
      for await (const { id } of respJson.data){
        const responseDelete = await carsApi.deleteCar(id);
        expect(responseDelete.ok()).toBeTruthy();
        expect(responseDelete.status()).toEqual(200);
        const responseDeleteJson = await responseDelete.json();
        expect(responseDeleteJson.data.carId).toEqual(id);
      }
    }
  })
})
