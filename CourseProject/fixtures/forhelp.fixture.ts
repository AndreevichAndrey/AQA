import { test as base } from '@playwright/test';
import { ForHelpBasePage } from 'src/pages/forhelp-base.page';

interface ForHelpFixture {
    ForHelpMainPage: ForHelpBasePage;
}

export const test = base.extend<ForHelpFixture>({
    ForHelpMainPage: async ({ page }, use) => {
        const ForHelpMainPage = new ForHelpBasePage(page);
        await use(ForHelpMainPage);
    }
});
