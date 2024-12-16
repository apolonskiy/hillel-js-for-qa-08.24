import { test as base } from '@playwright/test';
import { GaragePage } from '../poms';
import { CarsApi } from '../api'
import { getRandomCarData } from '../utils'

export const test = base.extend({
  /**
   * @type {import('../poms').GaragePage}
   */
  userGaragePage: async ({ page, context, baseURL, request }, use) => {
    //BEFORE TEST
    let carId = '';
    const garagePage = new GaragePage(page, context);
    const carsApi = new CarsApi(request, context, baseURL)
    const randomCar = getRandomCarData();
    await garagePage.navigateToPage()
    await garagePage.openAddCarForm()
    await page.route('**/api/cars', async (route, request) => {
      if(request.method() === 'POST'){
        const response = await route.fetch();
        const json = await response.json();
        carId = json.data.id;
        await route.continue()
      } else {
        await route.continue()
      }
    });
    await garagePage.addCar(randomCar)
    await page.waitForResponse('**/api/cars', (response) => response.request.method() === 'POST');
    //TEST
    await use(garagePage);
    // AFTER TEST
    await carsApi.deleteCar(carId);
  },
});