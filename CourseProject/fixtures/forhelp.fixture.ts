import { test as base } from '@playwright/test';
import { ForHelpBasePage } from 'src/pages/forhelp-base.page';
import { ForHelpIncomesPage } from 'src/pages/forhelp-incomes.page';

interface ForHelpFixture {
    ForHelpMainPage: ForHelpBasePage;
    ForHelpIncomePage: ForHelpIncomesPage;
}

export const test = base.extend<ForHelpFixture>({
    ForHelpMainPage: async ({ page }, use) => {
        const ForHelpMainPage = new ForHelpBasePage(page);
        await use(ForHelpMainPage);
    },
    ForHelpIncomePage: async ({ page }, use) => {
        const ForHelpIncomePage = new ForHelpIncomesPage(page);
        await use(ForHelpIncomePage);
    }
});
