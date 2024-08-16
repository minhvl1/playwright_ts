import {test as base} from '@playwright/test';
import * as PageUI from '../page/ui';

type MyFixtures = {
    todoPage: PageUI.TodoPage
    settingsPage: PageUI.SettingsPage
    googlePage: PageUI.GooglePage
    youtubePage: PageUI.YoutubePage
    demoBlazePage: PageUI.DemoBlazePage
    sendRequest: PageUI.SendRequest
};

export const test = base.extend<MyFixtures>({
    todoPage: async ({page}, use) => {
        // Set up the fixture.
        const todoPage = new PageUI.TodoPage(page);
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
        await use(new PageUI.DemoBlazePage(page));
    },

    settingsPage: async ({page}, use) => {
        await use(new PageUI.SettingsPage(page));
        // const settingsPage = new SettingsPage(page);
        // await use(settingsPage);
    },

    googlePage: async ({page}, use) => {
        await use(new PageUI.GooglePage(page))
    },

    youtubePage: async ({page}, use) => {
        await use(new PageUI.YoutubePage(page))
    },

    sendRequest: async ({}, use) => {
        await use(new PageUI.SendRequest())
    }
});

export {expect} from '@playwright/test';