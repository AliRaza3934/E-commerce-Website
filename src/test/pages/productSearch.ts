import { expect, Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class PD{

    landingPageLocators = {
        searchField:() => pageFixture.page.locator("//input[@id='js--search-option']]"),
        CategoryField:()=> pageFixture.page.locator("//a[normalize-space()='Accessories']"),
        filterfield:() => pageFixture.page.locator("#browse-filter"),
        assertProduct:()=> pageFixture.page.locator("//p[normalize-space()='Zif socket (40 pin)']"),
        Lowtohighfield:() => pageFixture.page.locator("option[value='PRICE_ASC']"),
    }


public async searchProduct(productName):Promise<void>{
    await this.landingPageLocators.searchField().type(productName);
    await pageFixture.page.keyboard.press('Enter');
}
public async Filtersearch():Promise<void>{
    await this.landingPageLocators.CategoryField().click();
    await this.landingPageLocators.filterfield().click();
    await this.landingPageLocators.assertProduct();
    const Titel = this.landingPageLocators.assertProduct();
    console.log("Comment: " + await Titel.textContent());
   // await this.landingPageLocators.Lowtohighfield().click();
   
    }

constructor(public page: Page){
    pageFixture.page = page;
}

}