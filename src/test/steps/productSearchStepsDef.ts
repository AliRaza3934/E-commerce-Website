import { Then, When } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";
import { PD} from "../pages/productSearch";

let productSearch = new PD (pageFixture.page);

When('User is enters {string}', async function(productName){
   
    await productSearch.searchProduct(productName);
   
})
Then('{string} is returned', async function(productName){
    
    await productSearch.assertProduct(productName);
});


Then('User is able to select  a categorys', async function () {

    
    await productSearch.Filtersearch();
    
})

