import { expect, Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class ProductSearch {

    landingPageLocators = {
        searchField:() => pageFixture.page.locator("//input[@placeholder='Search by product name']"),
        resultProducts:() => pageFixture.page.locator("//div[@class='product-info']//p[1]").first()
    }

    public async searchProduct(productName):Promise<void>{
        await this.landingPageLocators.searchField().type(productName);
        await pageFixture.page.keyboard.press('Enter');
    }

    public async assertProduct(searchResult):Promise<void>{
        await expect(this.landingPageLocators.resultProducts()).toContainText(searchResult);
        console.log(...await this.landingPageLocators.resultProducts().allTextContents());
    }

    constructor(public page: Page){
        pageFixture.page = page;
    }
}