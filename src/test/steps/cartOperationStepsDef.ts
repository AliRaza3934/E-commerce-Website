import{ Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber"
import {pageFixture} from "../hooks/pageFixture"
import { CartItem } from "../pages/cartOperations"

setDefaultTimeout(30000);

let productItem = new CartItem(pageFixture.page);

When('User is able to select select view and delete item',async function () {
    
    productItem.selectProduct();
})

