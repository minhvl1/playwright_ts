import {test} from '../feature/base';

test.describe('navigation', () => {

    test.beforeEach('Go to google', async ({page}) => {
        await page.goto("https://www.google.com/",{waitUntil: 'domcontentloaded'});
    })


    test('Search youtube', async ({googlePage,youtubePage}) => {
        await googlePage.searchGoogle("Youtube")
        await googlePage.clickYoutubeLabel()
        await youtubePage.verifyYoutubeLogoVisible()
    })

    test('Search facebook', async ({googlePage}) => {
        await googlePage.searchGoogle("Facebook")
        await googlePage.page.waitForTimeout(1000)
    })
})
