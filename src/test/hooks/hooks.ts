import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, firefox,webkit,Page } from "@playwright/test";
import { config } from "../../../playwright.config";
import { pageFixture } from "./pageFixture";


let browser: Browser;
let context: BrowserContext;

BeforeAll(async function(){
   browser = await chromium.launch(config); // Remove comment if you want run 
   //browser = await firefox.launch(config);// Remove comment if you want run 
  // browser = await webkit.launch(config);// Remove comment if you want run 

});

Before(async function(){
    context = await browser.newContext();
    const page = await context.newPage(); 
    pageFixture.page = page;
    
});

After(async function({pickle, result}){
    console.log(result?.status);
    if(result?.status == Status.PASSED){
        const img = await pageFixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}.png`,type:"png"});
        await this.attach(img, "image/png");
    }       
});

AfterAll(async function(){
   // await browser.close();
});