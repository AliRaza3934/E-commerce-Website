import { expect,Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class SignupPage{
  
  signUpLocators = {
     loginWindow:() => pageFixture.page.locator("//span[normalize-space()='Login']"),
     signupWindow:()=> pageFixture.page.locator(".btn.btn-link.js--btn-signup.pl-0"),
     userFullName:()=> pageFixture.page.locator("#userName"),
     emailField  :()=> pageFixture.page.locator("#email"),
     Phonefield:()=> pageFixture.page.locator("#phone"),
     passwordField:()=> pageFixture.page.locator("#password"),
     checkboxfield:()=> pageFixture.page.locator("//input[@type='checkbox']"),
     submitbtn:()=> pageFixture.page.locator("input[value='Sign Up']")

}

public async goToSignupPage():Promise<void>{
    await this.signUpLocators.loginWindow().click();
    await pageFixture.page.waitForTimeout(4000)
    await this.signUpLocators.signupWindow().click()
    await this.signUpLocators.userFullName().type('Raza');
    await this.signUpLocators.emailField().type('misbahfarheen011@gmail.com');
    await this.signUpLocators.Phonefield().type('499336779899');
    await this.signUpLocators.passwordField().type('Allluzuu');
    await pageFixture.page.waitForTimeout(4000)
    await pageFixture.page.check("//input[@type='checkbox']", {force: true})
    await this.signUpLocators.submitbtn().click();
  }

  constructor(public page: Page){
       pageFixture.page = page;
  }
}