import { expect, Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class ProductSearch{
    productPageLocators = {
        searchField:() => pageFixture.page.locator("//input[@placeholder='Search by product name']"),
        resultProducts:() => pageFixture.page.locator("//div[@class='product-info']//p[1]").first(),
        CategoryField:()=> pageFixture.page.locator("//a[normalize-space()='Accessories']"),
        filterfield:() => pageFixture.page.locator("//select[@id='browse-filter']"),
        assertPicehigh:()=> pageFixture.page.locator("//p[normalize-space()='TK. 124.59']"),
        assertPricelow:()=> pageFixture.page.locator("//p[normalize-space()='TK. 85.73']"),
    }


    public async searchProduct(productName):Promise<void>{
        await pageFixture.page.waitForTimeout(8000);
        await this.productPageLocators.searchField().type(productName);
        await pageFixture.page.keyboard.press('Enter');
    }
    public async assertProduct(searchResult):Promise<void>{
        await expect(this.productPageLocators.resultProducts()).toContainText(searchResult);

    }       //console.log(...await this.landingPageLocators.resultProducts().allTextContents());}
    public async Filtersearch():Promise<void>{
        await pageFixture.page.waitForTimeout(4000);
        await this.productPageLocators.CategoryField().click();
        await this.productPageLocators.filterfield().click();
        await this.productPageLocators.assertPicehigh();
        const high = this.productPageLocators.assertPicehigh();
        console.log("Price High: " + await high.textContent());
        await pageFixture.page.waitForTimeout(8000);
        await this.productPageLocators.assertPricelow();
        const low = this.productPageLocators.assertPricelow();
        console.log("Price Low: " + await low.textContent());
    
   // await this.landingPageLocators.Lowtohighfield().click()} }
    }

    constructor(public page: Page){
        pageFixture.page = page;
}
}