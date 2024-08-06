import type { Page, Locator } from '@playwright/test';

export class TodoPage {
    private readonly inputBox: Locator;
    private readonly todoItems: Locator;

    constructor(public readonly page: Page) {
        this.inputBox = this.page.locator('input.new-todo');
        this.todoItems = this.page.getByTestId('todo-item');
    }

    async goto() {
        await this.page.goto('https://demo.playwright.dev/todomvc/');
        console.log("goto demo playwright" );
    }

    async addToDo(text: string) {
        await this.inputBox.fill(text);
        await this.inputBox.press('Enter');
        console.log("addToDo:", text);
    }

    async remove(text: string) {
        const todo = this.todoItems.filter({ hasText: text });
        await todo.hover();
        await todo.getByLabel('Delete').click();
        console.log("remove:", text);
    }

    async removeAll() {
        while ((await this.todoItems.count()) > 0) {
            await this.todoItems.first().hover();
            await this.todoItems.getByLabel('Delete').first().click();
            console.log("remove all:");
        }
    }

    async checkedCheckBox(label: string){
        await this.page.locator(`//span[text()="${label}"]//following-sibling::div[@role="checkbox"]`).click()
    }
}