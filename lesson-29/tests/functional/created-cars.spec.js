import { test } from '@playwright/test';
import { garageCreatedCar, CarsApi } from '../../src'

test.describe('Verify actions on created cars in user garage', () => {
  test.afterEach(async ({ request, context, baseURL }) => {
    const carsApi = new CarsApi(request, context, baseURL);
    const allCarsResp = await carsApi.getCars();
    const allCarsData = (await allCarsResp.json()).data
    console.log(allCarsData);
    for await(const { id } of allCarsData){
      await carsApi.deleteCar(id);
    }
  })
  garageCreatedCar('Verify that car has been added to the page', async({ userGaragePage }) => {
    // sessionCookies = getSessionCookies()
    await userGaragePage.isCarVisible(userGaragePage.createdCars[0].brand, userGaragePage.createdCars[0].model);
  })
})
