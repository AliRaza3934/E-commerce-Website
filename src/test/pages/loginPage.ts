import { expect, Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class LoginPage {

    loginPageLocators = {
        userField:() => pageFixture.page.locator("//div[@class='form-group']//input[@name='username']"),
        passwordField:() => pageFixture.page.locator("//input[@name='password']").first(),
        loginBtn:() => pageFixture.page.locator("//input[@type='submit']").first(),
        loginWindow:() => pageFixture.page.locator("//span[normalize-space()='Login']"),
        invalidLoginMsg:() => pageFixture.page.locator("//span[@id='message']"),
        usernameNavBar:() => pageFixture.page.locator("//a[@class='dropdown-toggle-user']//span[contains(., 'arqureshi.3934@gmail.com')]")
    }
    public async goToUrl():Promise<void>{
        await pageFixture.page.waitForTimeout(4000);
        await pageFixture.page.goto('https://techshopbd.com/');
    }
    public async userSuccessfulLogin(username: string, password: string):Promise<void>{
        await this.loginPageLocators.loginWindow().click();
        await this.loginPageLocators.userField().type(username);
        await pageFixture.page.waitForTimeout(4000);
        await this.loginPageLocators.passwordField().type(password);
        await this.loginPageLocators.loginBtn().click();
    }

    public async userNotLoggedIn():Promise<void>{
        await expect(this.loginPageLocators.invalidLoginMsg()).toContainText('Invalid email and password');
    }

    public async userIsLoggedIn(wrongUsername: string):Promise<void>{
        await expect(this.loginPageLocators.usernameNavBar()).toContainText(wrongUsername);
        console.log(wrongUsername);
    }

    constructor(public page: Page){
        pageFixture.page = page;
    }
}