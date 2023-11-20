import{expect,Page}from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture"

export class CartItem{
    cartitemLocators = {
        categoryDropdown:()=> pageFixture.page.locator("//a[normalize-space()='Accessories']"),
        accessoriesField:()=> pageFixture.page.locator("//p[normalize-space()='DC Socket']"),
        addItem:()=> pageFixture.page.locator('#js--btn-plus'),
        cartBtn:()=> pageFixture.page.locator("//a[@class='btn btn-cart']"),
        gotoCart:()=> pageFixture.page.locator("//a[normalize-space()='Go to Cart']"),
        assertAmount:()=>pageFixture.page.locator("//p[@id='payable_total']"),
        deletItem:()=> pageFixture.page.locator("//a[@name='remove-cart-product']"),
        
    }
   
    public async selectProduct():Promise<void>{
        await pageFixture.page.waitForTimeout(5000);
        await this.cartitemLocators.categoryDropdown().click();
        await this.cartitemLocators.accessoriesField().click();
        await pageFixture.page.waitForSelector('#js--btn-plus');
        await pageFixture.page.waitForTimeout(5000);
        await pageFixture.page.locator('#js--btn-plus').dblclick();
        await this.cartitemLocators.cartBtn().click();
        await pageFixture.page.waitForTimeout(5000);
        await this.cartitemLocators.gotoCart().click(); 
        await this.cartitemLocators.assertAmount().click();
        await pageFixture.page.waitForTimeout(5000);
        const comment = this.cartitemLocators.assertAmount();
        console.log("Amount: " + await comment.textContent());
        await this.cartitemLocators.deletItem().click();
    }
    
    constructor(public page: Page){
        pageFixture.page = page;
    }
}