import { test } from '../feature/base';
import {TodoPage} from "../page/ui/todo-page";

test.describe.configure({ mode: 'serial' });
test.beforeEach('Go to google', async ({page}) => {
    await page.goto("https://supportgowhere.life.gov.sg/eligibility");
})


test('Check all checkbox', async ({page}) => {
    await page.locator("//button[text()='Continue']").click()
    const  todoPage= new TodoPage(page)
    // await page.locator("//span[contains(text(),'Financial assistance')]//following-sibling::div[@class='checkbox']").click()
    await todoPage.checkedCheckBox('Financial assistance')
    const totalCheckbox = await page.locator("//fieldset//span").count()
    console.log(totalCheckbox)
    for (let i = 1; i <= totalCheckbox; i++) {
        await page.locator(`(//fieldset//span)[${i}]//following-sibling::div[@role="checkbox"]`).click()
    }
    await page.waitForTimeout(2000)
})






