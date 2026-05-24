const {test,expect} = require('@playwright/test');       

//This file is to show the basic structure of a Playwright test and how to use the browser context and page objects in Playwright
test.only('@Client App Login Test', async ({page})=> 
    {
        
        const username = page.locator('#userEmail');
        const password = page.locator('#userPassword');
        const signInBtn = page.locator('#login');
        
        const url = "https://rahulshettyacademy.com/client/";
        
        await page.goto(url);
        await username.fill('sinha.shop5@gmail.com');
        await password.fill('Test@1234');
        await signInBtn.click();
        await page.waitForLoadState('networkidle');// this could be flaky so we can use a better approach to wait for the page to load after login,
        //  like waiting for a specific element to be visible or using a better locator strategy to wait for the page to load after login, like waiting for the card titles to be visible after login, like this:

        const cardTitles = page.locator(".card-body b");
        //await page.locator(".card-body b").first().waitFor();
        const allTitles = await cardTitles.allTextContents();
        console.log(allTitles);
    });
