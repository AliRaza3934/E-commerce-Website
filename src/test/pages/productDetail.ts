import{ expect ,Page} from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture"

export class ProductDetail{
  productDetailLocators = {
    categoryField:()=> pageFixture.page.locator("//a[normalize-space()='Accessories']"),
    selectdropdownField:()=> pageFixture.page.locator('//div[@class="dropdown-menu"]//a[normalize-space()="Connector"]'),
    accessoriesField:()=> pageFixture.page.locator("//p[normalize-space()='USB Cable A to B']"),
    asserttitle:()=> pageFixture.page.locator("//h1[normalize-space()='USB Cable A to B']"),
    assertPrice:()=> pageFixture.page.locator("//p[@class='price']"),
    assertComment:()=>pageFixture.page.locator("//div[@class='review-list-wrapper']//div[2]//p[2]//span[1]"),
    assertPict:()=> pageFixture.page.locator("//img[@name='img-zoom']"),
    
}
public async itemCategory():Promise<void>{
    
    await pageFixture.page.waitForTimeout(4000);
    await this.productDetailLocators.categoryField().click();
    
    await this.productDetailLocators.accessoriesField().click();
    const description = this.productDetailLocators.asserttitle();
    console.log("Product Desc: " + await description.textContent());
    
    await this.productDetailLocators.assertPrice().click();
    const price = this.productDetailLocators.assertPrice();
    console.log("Product Price: " + await price.textContent());
    
    await this.productDetailLocators.assertComment().click();
    const comment = this.productDetailLocators.assertComment();
    console.log("Comment: " + await comment.textContent());
    await expect(this.productDetailLocators.assertPict()).toBeVisible();
   
}
 
    constructor(public page: Page){
    pageFixture.page = page;
    }
}