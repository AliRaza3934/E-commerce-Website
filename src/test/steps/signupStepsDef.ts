import { Given , When, Then , setDefaultTimeout} from "@cucumber/cucumber"
import { pageFixture } from "../hooks/pageFixture"
import { SignupPage } from "../pages/signUpPage"

setDefaultTimeout(15000);


When('User clicks login option and clicks signup tab', async function(){
    let loginUp = new SignupPage(pageFixture.page);
    loginUp.goToSignupPage();
});