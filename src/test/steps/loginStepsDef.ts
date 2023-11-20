import {Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber"
import { pageFixture } from "../hooks/pageFixture"
import { LoginPage } from "../pages/loginPage"

setDefaultTimeout(30000);

Given('User visits the website', async function(){
    let loginPage = new LoginPage(pageFixture.page);
    await loginPage.goToUrl();
});

When('User enters {string} and {string}', async function (username: string, password: string){
    let loginPage = new LoginPage(pageFixture.page);
    await loginPage.userSuccessfulLogin(username, password);
});

Then('User is logged in with {string}', async function (wrongUsername: string){
    let loginPage = new LoginPage(pageFixture.page);
    await loginPage.userIsLoggedIn(wrongUsername);
});

Then('User is not logged in', async function(){
    let loginPage = new LoginPage(pageFixture.page);
    await loginPage.userNotLoggedIn();
});