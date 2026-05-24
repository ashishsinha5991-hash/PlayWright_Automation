const {test,expect} = require('@playwright/test');       

//This file is to show the basic structure of a Playwright test and how to use the browser context and page objects in Playwright
test('Browser Context Playwright Test', async ({browser})=> 
    {
        //this test is to show how to create a browser context and page in Playwright

        
        const context = await browser.newContext();
        const page = await context.newPage();
        const username = page.locator('#username');
        const password = page.locator('#password');
        const signInBtn = page.locator('#signInBtn');
        const errorMessage = page.locator("div[style*='block']"); 
        const cardTitles = page.locator('.card-body a');
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        console.log(await page.title());

        await username.fill('rahulshettyacademy');
        await password.fill('learning');
        await signInBtn.click();
        console.log(await errorMessage.textContent());
        await expect(errorMessage.textContent()).toContain('Incorrect');
        
        await username.fill("");
        await username.fill("rahulshettyacademy");
        await signInBtn.click();
        console.log(await cardTitles.first().textContent());
        console.log(await cardTitles.nth(1).textContent());
        //to get the text content of all the card titles and print them in the console,
        //  but please note that allTextContents returns an array of text content of all the card titles, it does not have playwright's auto wait mechanism,
        //  so we need to add a wait for the card titles to be visible before getting the text content of all the card titles,
        //  otherwise it will return an empty array or throw an error if the card titles are not visible yet. 
        //  so we can use the expect function to wait for the card titles to be visible before getting the text content of all the card titles,
        //  like this: or you can just use above one specific card title to wait for the card titles to be visible, like this:
        await expect(cardTitles).toBeVisible();
        const allTitles = await cardTitles.allTextContents();
        console.log(allTitles);
      
    });
//we can use .only to only run this test and skip the other tests in the file, this is useful when we want to run only a specific test and skip the other tests in the file
//test.only('Page Playwright Test', async ({page})=>     
test.only('UI Select static dropdown', async ({page})=> 
    {
        //this test is to show how to use the page object directly in Playwright
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        const username = page.locator('#username');
        const signInBtn = page.locator('#signInBtn');
        const dropdown = page.locator('select.form-control');
        await dropdown.selectOption('consult');
        await page.locator(".radiotextsty").last().click();
        await page.locator('#okayBtn').click();
        await expect(page.locator(".radiotextsty").last()).toBeChecked();
        await page.locator("#terms").click();
        await expect(page.locator("#terms")).toBeChecked();
        await page.locator("#terms").uncheck();
        expect(await page.locator("#terms").isChecked()).toBeFalsy();
        //await page.pause();//this will pause the test execution and open the Playwright Inspector,
        //  where you can inspect the elements on the page and see the test execution in real time,
        //  this is useful for debugging and understanding how the test is working,
        //  you can also use the Playwright Inspector to generate code snippets for the actions you perform on the page,
        //  which can help you write your tests faster and more efficiently.
        
    });