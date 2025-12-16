// import { KnigomaniaMainPage } from 'src/pages/knigomania-base.page';
// import { test } from 'fixtures/knigomania.fixture';
// import { expect as expectChai } from 'chai';

// test.describe('CategoryList', { tag: '@tab' }, () => {
//     test('Verify items name', async ({ page }) => {
//         await KnigomaniaMainPage.TabListComponent.expandTab();
//         const menuItems = await page.TabListComponent.getAllTabs();
//         expectChai(menuItems).to.have.members(['Последние поступления', 'Аксессуары для чтения', 'Учебная литература']);
//     });
// });

// test('User can login', async ({ KnigomaniaPage }) => {
//     await KnigomaniaPage.goto();
//     const menuItems = await KnigomaniaPage.TabListComponent.getAllTabs();
//     expectChai(menuItems).to.have.members(['Последние поступления', 'Аксессуары для чтения', 'Учебная литература']);
// });
// test.describe('TabListComponent', () => {
//     test('Expand tab list ', async ({ page }) => {
//         const main = new KnigomaniaMainPage(page);
//         const tab = new TabListComponent(page.locator('#list_category_left'));
//         await main.goto();
//         await main.expandCategoryList();
//         await tab.clickSingleTab();
//         await expect;
//     });
// });
