import {type Page, type Locator} from '@playwright/test';


export class DemoBlazePage {
    readonly page: Page
    readonly productPrice: Locator
    readonly productDescription: Locator

    constructor(page: Page) {
        this.page = page
        this.productPrice = page.locator("(//div[@class='card-block'])[position()=1]//h5")
        this.productDescription = page.locator("(//h3)[1]")
    }

    async getProductPrice() {
        return await this.productPrice.textContent()
    }

    async log(String: string) {
        console.log(String)
    }
}