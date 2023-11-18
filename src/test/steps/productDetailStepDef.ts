import {Given, When , Then, setDefaultTimeout} from "@cucumber/cucumber"
import { pageFixture } from "../hooks/pageFixture"
import { ProductDetail } from "../pages/productDetail"

setDefaultTimeout(15000);

let productItems = new ProductDetail(pageFixture.page);

When('User is able to select categorys',async function () {
    
   await productItems.itemCategory();
   
  
    
})
