import {Given, When , Then, setDefaultTimeout} from "@cucumber/cucumber"
import { pageFixture } from "../hooks/pageFixture"
import { ProductDetail } from "../pages/productDetail"

setDefaultTimeout(15000);

Given('User is at techshop', async function(){
    let productItems = new ProductDetail(pageFixture.page);
    await pageFixture.page.goto('https://techshopbd.com/');
    await pageFixture.page.waitForLoadState("networkidle");
});

When('User navigates to a category', async function(){
    let product = new ProductDetail(pageFixture.page);
    await product.itemCategory();
});

Then('Category is selected', async function(){
    console.log('Passed.')
})