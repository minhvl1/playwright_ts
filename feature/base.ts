import {test as base} from '@playwright/test';
import {TodoPage, SettingsPage, GooglePage, YoutubePage, DemoBlazePage} from '../page';

type MyFixtures = {
    todoPage: TodoPage
    settingsPage: SettingsPage
    googlePage: GooglePage
    youtubePage: YoutubePage
    demoBlazePage: DemoBlazePage
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

    demoBlazePage: async ({page}, use) => {
        // const demoBlazePage = new DemoBlazePage(page);
        // await demoBlazePage.log("1")
        // await demoBlazePage.log("2")
        // await use(demoBlazePage);
        // await demoBlazePage.log("3")
        // await demoBlazePage.log("4")
        await use(new DemoBlazePage(page));
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