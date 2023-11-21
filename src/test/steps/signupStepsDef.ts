import { Given , When, Then , setDefaultTimeout} from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";
import { SignupPage } from "../pages/signupPage";

setDefaultTimeout(30000);

When('User clicks login option and clicks signup tab', async function(){
    let loginUp = new SignupPage(pageFixture.page);
    await loginUp.goToSignupPage();
});