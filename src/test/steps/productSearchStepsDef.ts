import { Then, When } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";
import { ProductSearch } from "../pages/productSearch";


When('User enters {string}', async function(productName){
    let productSearch = new ProductSearch(pageFixture.page);
    await productSearch.searchProduct(productName);
});

Then('{string} is returned', async function(productName){
    let productSearch = new ProductSearch(pageFixture.page);
    await productSearch.assertProduct(productName);
});

When('When User enters {string}', async function(getCategory){
    let productSearch = new ProductSearch(pageFixture.page);
    await productSearch.goToCategory(getCategory);
})

When('User selects low to high sorting', async function(getCategory){
    console.log('WIP');
})