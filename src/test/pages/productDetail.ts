import{ expect ,Page} from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture"

export class ProductDetail{
  productDetailLocators = {
    accessoriesField:()=> pageFixture.page.locator("//p[normalize-space()='Female Header Connector Single Row']"),
    asserttitle:()=> pageFixture.page.locator("//h1[normalize-space()='Female Header Connector Single Row']"),
    assertPrice:()=> pageFixture.page.locator("//p[@class='price']"),
    assertComment:()=>pageFixture.page.locator("//span[@id='js--review-text']"),
    assertPict:()=>pageFixture.page.locator("//img[@role='presentation']"),
    
}
public async itemCategory():Promise<void>{
    await pageFixture.page.goto('https://techshopbd.com/browse/category?id=30');
    
    await this.productDetailLocators.accessoriesField().click();
    const description = await this.productDetailLocators.asserttitle();
    console.log(await description.textContent());
    
    await this.productDetailLocators.assertPrice().click();
    const price = await this.productDetailLocators.assertPrice();
    console.log(await price.textContent());
    
    await this.productDetailLocators.assertComment().click();
    const comment = await this.productDetailLocators.assertComment();
    console.log(await comment.textContent());

    await this.productDetailLocators.assertPict().click();
    const pict = await this.productDetailLocators.assertPict();
    console.log(await pict.textContent())
}


 
constructor(public page: Page){
    pageFixture.page = page;
}
}