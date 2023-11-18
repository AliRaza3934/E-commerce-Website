import { expect,Page } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class SignupPage{
  
  signUpLocators = {
     loginWindow:() => pageFixture.page.locator("//span[normalize-space()='Login']"),
     signupWindow:()=> pageFixture.page.locator(".btn.btn-link.js--btn-signup.pl-0"),
     userFullName:()=> pageFixture.page.locator("#userName"),
}

public async goToSignupPage():Promise<void>{
    await this.signUpLocators.loginWindow().click();
    //await pageFixture.page.goto('https://techshopbd.com/login#signup')
    await this.signUpLocators.signupWindow().click()
   // console.log(...await this.signUpLocators.signupWindow().allTextContents());
  }

  constructor(public page: Page){
       pageFixture.page = page;
  }
}