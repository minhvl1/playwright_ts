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

    async getFulfilledResponse(page: Page) {
        console.log("Wait for getFulfilledResponse")
        return page.waitForResponse(async (response) => {
            if (!response.url().includes("config")) {
                return false
            }
            const responseBody = await response.json()
            return responseBody.API_URL === "https://api.demoblaze.com"
        })
        // return page.waitForResponse(/config/)
        // wait until:  responseBody.API_URL === "https://api.demoblaze.com"
    }

    async getLoginResponse(page: Page) {
        console.log("Wait for login response")
        return page.waitForResponse(async (response) => {
            if (!response.url().includes("check")) {
                return false
            }
            const responseBody = await response.json()
            return responseBody.Item.username == "admin"
        })
    }
}