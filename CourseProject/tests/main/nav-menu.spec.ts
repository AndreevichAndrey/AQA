import { expect } from '@playwright/test';
import { test } from 'fixtures/forhelp.fixture';
import { NAV_MENU_ITEMS } from 'src/data/expected/nav-menu';

test.describe('Navigation Menu Tests', () => {
    test.beforeEach(async ({ ForHelpMainPage }) => {
        await ForHelpMainPage.goto();
    });
    test('Navigation menu is visible', async ({ ForHelpMainPage }) => {
        const isVisible = await ForHelpMainPage.NavContainer.isNavMenuVisible();
        expect(isVisible).toBeTruthy();
    });
    test('Navigation menu contains all expected items', async ({ ForHelpMainPage }) => {
        const menuItemsText = await ForHelpMainPage.NavContainer.getMenuItemsText();
        expect(menuItemsText).toEqual(NAV_MENU_ITEMS);
    });
    test('Navigation menu items are clickable', async ({ ForHelpMainPage }) => {
        await ForHelpMainPage.NavContainer.verifyMenuItemsAreClickable();
    });
    test('Navigation menu has correct number of items', async ({ ForHelpMainPage }) => {
        const itemCount = await ForHelpMainPage.NavContainer.getMenuItemCount();
        expect(itemCount).toBe(NAV_MENU_ITEMS.length);
    });
    test('Can click menu item by text', async ({ ForHelpMainPage }) => {
        // Click on 'Прибутки' menu item
        await ForHelpMainPage.NavContainer.clickMenuItemByText('Прибутки');
        // Verify page navigated or menu item is highlighted
        // You can add specific assertions based on your app behavior
    });
    test('Menu item text matches exactly with expected items', async ({ ForHelpMainPage }) => {
        const menuItemsText = await ForHelpMainPage.NavContainer.getMenuItemsText();

        NAV_MENU_ITEMS.forEach((expectedItem) => {
            expect(menuItemsText).toContain(expectedItem);
        });
    });

    test('Navigation menu maintains structure after page interactions', async ({ ForHelpMainPage }) => {
        const initialMenuItems = await ForHelpMainPage.NavContainer.getMenuItemsText();

        // Toggle theme (a page interaction)
        await ForHelpMainPage.toggleTheme();

        // Menu items should remain the same
        const menuItemsAfterThemeChange = await ForHelpMainPage.NavContainer.getMenuItemsText();
        expect(menuItemsAfterThemeChange).toEqual(initialMenuItems);
    });
});
