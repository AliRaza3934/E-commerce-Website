import { expect ,Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class UserProfile{
    userProfileLocators = {
        dropdownField:()=> pageFixture.page.locator("//a[@class='dropdown-toggle-user']s']"),
        selelctProfile:()=> pageFixture.page.locator("//a[normalize-space()='Profile']"),
        changeinfoMenu:()=> pageFixture.page.locator("//span[@class='js--link-edit1 ml-4']"),
        nameField:()=>pageFixture.page.locator("//input[@id='name']"),
        savebtn:()=> pageFixture.page.locator("//input[@id='personalInfo']"),
        changeinfoMenuA:()=> pageFixture.page.locator("//span[@class='js--address-edit1 ml-4']"),
        addressField:()=> pageFixture.page.locator("//input[@id='streetAddress1']"),
        addressFields:()=> pageFixture.page.locator("//input[@id='streetAddress2']"),
        cityField:()=> pageFixture.page.locator("//input[@id='city']"),
        PostcodeField:()=> pageFixture.page.locator("//input[@id='postCode']"),
        saveBtn:()=>pageFixture.page.locator("//input[@id='addressInfo']"),
        myorder:()=>pageFixture.page.locator("//a[normalize-space()='My Order']"),
        assertOrderId:()=>pageFixture.page.locator("//p[@class='ml-0']"),
        assertStatus:()=>pageFixture.page.locator("//div[@class='order-heading']//p[1]"),
        assertPayable :()=>pageFixture.page.locator("//span[normalize-space()='TK. 465']"),
        assertOrderTitle:()=>pageFixture.page.locator("//p[@class='product-name text-truncate ml-0']"),
    }


    public async navigateToEditProfile():Promise<void>{
        await pageFixture.page.goto('https://techshopbd.com/my-section/my-profile');
        await this.userProfileLocators.changeinfoMenu().click();
        await this.userProfileLocators.nameField().clear();
        await this.userProfileLocators.nameField().type('ALIRAZA');
        await this.userProfileLocators.savebtn().click();
        await this.userProfileLocators.changeinfoMenuA().click();
        await this.userProfileLocators.addressField().type('klix');
        await this.userProfileLocators.addressFields().type('3');
        await this.userProfileLocators.cityField().type('Berlin');
        await this.userProfileLocators.PostcodeField().type('13405');
        await this.userProfileLocators.saveBtn().click();
        await this.userProfileLocators.myorder().click();

        const orderID = this.userProfileLocators.assertOrderId();
        console.log("ID: " + await orderID.textContent());

        const status = this.userProfileLocators.assertStatus();
        console.log("Status: " + await status.textContent());

        const payaBle = this.userProfileLocators.assertPayable();
        console.log("Payable: " + await payaBle.textContent());

        const orderTitle = this.userProfileLocators.assertOrderTitle();
        console.log("Title: " + await orderTitle.textContent());
    }
    constructor(public page: Page){
        pageFixture.page = page;
    }
}