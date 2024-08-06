import {type Page, type Locator} from '@playwright/test';
import {expect} from "../feature/base";


export class YoutubePage {
    readonly page: Page
    readonly logoYoutube: Locator

    constructor(page: Page) {
        this.page = page
        this.logoYoutube = page.locator("(//yt-icon[@id='logo-icon'])[1]")
    }

    async verifyYoutubeLogoVisible() {
        await expect(this.logoYoutube).toBeVisible()
    }
}