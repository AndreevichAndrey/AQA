import { expect } from '@playwright/test';
import { test } from 'fixtures/forhelp.fixture';
import { NAV_MENU_ITEMS } from 'src/data/expected/nav-menu';

test.describe('Main page tests', () => {
    test('Change theme test', async ({ ForHelpMainPage }) => {
        await ForHelpMainPage.goto();
        await ForHelpMainPage.toggleTheme();
        await ForHelpMainPage.verifyThemeChanged();
    });
    test('Navigation menu text is visible', async ({ ForHelpMainPage }) => {
        await ForHelpMainPage.goto();
        const menuItemsText = await ForHelpMainPage.NavContainer.getMenuItemsText();
        expect(menuItemsText).toEqual(NAV_MENU_ITEMS);
    });
});
