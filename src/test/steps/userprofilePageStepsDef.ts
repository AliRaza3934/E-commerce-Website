import{ Given ,When ,Then ,setDefaultTimeout} from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";
import { UserProfile } from "..//pages//userprofilePage";

setDefaultTimeout(30000);

Then('User is able to click on dropdown toggle', async function(){
    let userProfile = new UserProfile(pageFixture.page);
    await userProfile.navigateToEditProfile();
});