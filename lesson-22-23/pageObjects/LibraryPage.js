import {expect} from '@playwright/test'
import BasePage from "./BasePage";

export default class LibraryPage extends BasePage{
    constructor(page){
        super(page)
        this.pageurl = '/app/my-library'
    }

    locators = {
        fileUploadInput: this.page.locator('input[data-testid="file-input"]'),
        genericUploadedFileDiv: this.page.locator('[data-testid="dropzone"] section li:has([data-view="list"])'),
        ellipsesButton: this.page.locator('button:has(svg)'),
        deleteButton: this.page.getByRole('menuitem', {name: 'Delete'}),
        deleteConfirmationButton: this.page.locator('footer button').filter({hasText: 'Delete'}),
        heading: this.page.getByRole('heading', {name: 'My library'})
    }

    async waitForPageToLoad(){
        await expect(this.locators.heading).toBeVisible();
    }

    async uploadFile(subPath){
        await this.locators.fileUploadInput.setInputFiles(this.getDataFolderPath(subPath));
        await this.page.waitForTimeout(1500);
    }

    async isUploadVisible(fileName){
        return this.locators.genericUploadedFileDiv.locator('span', {hasText: fileName}).isVisible()
    }

    async deleteUploadedFile(fileName){
        await this.locators.genericUploadedFileDiv.locator('span', {hasText: fileName}).hover();
        await this.locators.genericUploadedFileDiv.locator('div', {hasText: fileName}).locator(this.locators.ellipsesButton).click({ force: true });
        await this.locators.deleteButton.click();
        await this.locators.deleteConfirmationButton.click();
    }
}