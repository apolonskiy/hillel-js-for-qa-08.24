import { expect } from '@playwright/test';
import BasePage from './BasePage';

export default class GaragePage extends BasePage {
  createdCars = [];
  constructor(page) {
    super(page)
    this.url = '/panel/garage';
  }

  selectors = {
    addCarButton: this.page.getByRole('button', { name: 'Add car' }),
    sucessMessage: this.page.locator('.alert-success'),
    formBrandDropdown: this.page.locator('#addCarBrand'),
    formModelDropdown: this.page.locator('#addCarModel'),
    formMileageField: this.page.locator('#addCarMileage'),
    formAddButton: this.page.getByRole('button', { name: 'Add' }),
    formRemoveButton: this.page.getByRole('button', { name: 'Remove' }),
    formCancelButton: this.page.getByRole('button', { name: 'Cancel' }),
    createdCarSelector: (brand, model) => this.page.locator(`//app-car[contains(.//p,"${brand} ${model}")]`),
    editCarButton: this.page.locator('button[class*="car_edit"]'),
    removeDialogConfirmationButton: this.page.locator('div[class="modal-content"]').getByRole('Button', { name: 'Remove' }),
    removeDialogCancelButton: this.page.locator('div[class="modal-content"]').getByRole('Button', { name: 'Cencel' }),
  };

  async waitForGaragePageToLoad(){
    await expect(this.selectors.addCarButton).toBeVisible();
  }

  async openAddCarForm() {
    await this.selectors.addCarButton.click();
  }

  async addCar({ brand, model, mileage }) {
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await this.page.waitForTimeout(500);
    await this.selectors.formBrandDropdown.selectOption({ label:brand });
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await this.page.waitForTimeout(500);
    await this.selectors.formModelDropdown.selectOption({ label:model });
    await this.selectors.formMileageField.fill(mileage);
    await this.selectors.formAddButton.click();
    this.createdCars.push({ brand, model, mileage });
  }

  async openCarEditDialog(brand, model) {
    await this.selectors.createdCarSelector(brand, model).locator(this.selectors.editCarButton).click();
  } 

  async clickRemoveCarButton(){
    await this.selectors.formRemoveButton.click();
  }

  async removeCar(brand, model) {
    await this.openCarEditDialog(brand, model);
    await this.clickRemoveCarButton()
  }

  async isCarVisible(brand, model){
    await expect(this.selectors.createdCarSelector(brand, model).first()).toBeVisible();
  }
}