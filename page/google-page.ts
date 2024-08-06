import {type Page, type Locator} from '@playwright/test';


export class GooglePage {
    readonly page: Page
    readonly searchField: Locator
    readonly lblYoutube: Locator

    constructor(page: Page) {
        this.page = page
        this.searchField = page.locator("//textarea[@class='gLFyf']")
        this.lblYoutube = page.locator("(//h3)[1]")
    }

    async searchGoogle(key: string) {
        await this.searchField.fill(key)
        await this.page.keyboard.down("Enter")
        console.log("search google:"+key)
    }

    async clickYoutubeLabel() {
        await this.lblYoutube.click()
        console.log("click youtube label")
    }
}