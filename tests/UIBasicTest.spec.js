const {test,expect} = require('@playwright/test');       

//This file is to show the basic structure of a Playwright test and how to use the browser context and page objects in Playwright
test.only('Browser Context Playwright Test', async ({browser})=> 
    {
        //this test is to show how to create a browser context and page in Playwright
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        console.log(await page.title());

        await page.locator('#username').type('rahulshettyacademy');
        await page.locator('#password').type('learning');
        await page.locator('#signInBtn').click();
        //need to correct the locator for the error message and then uncomment the below line to verify the error message
        //await expect(page.locator("p[class='text-center text-danger']")).toHaveText('Incorrect username or password.');
    });
//we can use .only to only run this test and skip the other tests in the file, this is useful when we want to run only a specific test and skip the other tests in the file
//test.only('Page Playwright Test', async ({page})=>     
test('Page Playwright Test', async ({page})=> 
    {
        //this test is to show how to use the page object directly in Playwright
        await page.goto('https://www.google.com/');
        console.log(await page.title());
        expect(await page.title()).toBe('Google');
    });