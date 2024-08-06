import {test as base} from '@playwright/test';
import {TodoPage} from '../page/todo-page';
import {SettingsPage} from '../page/settings-page';
import {GooglePage} from "../page/google-page";
import {YoutubePage} from "../page/youtube-page";

type MyFixtures = {
    todoPage: TodoPage
    settingsPage: SettingsPage
    googlePage: GooglePage
    youtubePage: YoutubePage
};

export const test = base.extend<MyFixtures>({
    todoPage: async ({page}, use) => {
        // Set up the fixture.
        const todoPage = new TodoPage(page);
        await todoPage.goto();
        await todoPage.addToDo('item1');
        await todoPage.addToDo('item2');
        await use(todoPage);
        await todoPage.removeAll();
    },

    settingsPage: async ({page}, use) => {
        await use(new SettingsPage(page));
        // const settingsPage = new SettingsPage(page);
        // await use(settingsPage);
    },

    googlePage: async ({page}, use) => {
        await use(new GooglePage(page))
    },

    youtubePage: async ({page}, use) => {
        await use(new YoutubePage(page))
    }
});

export {expect} from '@playwright/test';