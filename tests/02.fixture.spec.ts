import { test, expect } from '../feature/base';

test.describe.configure({ mode: 'serial' });
test.beforeEach(async ({ settingsPage }) => {
    await settingsPage.switchToDarkMode();
});

test('Add items', async ({ todoPage, page }) => {
    await todoPage.addToDo('something nice');
    await expect(page.getByTestId('todo-title')).toContainText(['something nice']);
});


test('Remove items', async ({ todoPage }) => {
    await todoPage.remove("item1")
    await todoPage.remove("item2")
});

