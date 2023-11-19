import{expect,Page}from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture"

export class CartItem{
    cartitemLocators = {
        accessoriesField:()=> pageFixture.page.locator("//p[normalize-space()='DC Socket']"),
        addItem:()=> pageFixture.page.locator('#js--btn-plus'),
        cartbtn:()=> pageFixture.page.locator("#details > div.content-section > div > div.card.details-section.h-100 > div.button > a.btn.btn-cart-login"),
        
    }

    public async selectCategory():Promise<void>{
        await pageFixture.page.goto('https://techshopbd.com/browse/category?id=30');

    }

    public async selectProduct():Promise<void>{
        await this.cartitemLocators.accessoriesField().click();
        await pageFixture.page.waitForSelector('#js--btn-plus');
        await pageFixture.page.waitForTimeout(5000);
        await pageFixture.page.locator('#js--btn-plus').dblclick();
        await this.cartitemLocators.cartbtn().click()
    }
    constructor(public page: Page){
        pageFixture.page = page;
    }
}