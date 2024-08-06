import { test } from '../feature/base';

test.describe.configure({ mode: 'serial' });
test.beforeEach('Go to Demoblazer', async ({page}) => {
    await page.goto("https://demoblaze.com/");
})


test('Handle alert', async ({page}) => {
    await page.locator("//a[@id='login2']").click()
    await page.locator("//input[@id='loginusername']").fill("123")
    await page.locator("//input[@id='loginpassword']").fill("456")
    await page.locator("//button[@onclick='logIn()']").click()


    const dialogPromise = new Promise((resolve) => {
        page.once('dialog', async dialog => {
            const message = dialog.message();
            await dialog.dismiss();
            resolve(message);
        });
    });

    const alertText = await dialogPromise;
    console.log("Alert text:", alertText);
})






