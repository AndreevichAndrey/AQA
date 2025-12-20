import { test as base } from '@playwright/test';
import { KnigomaniaMainPage } from 'src/pages/knigomania-base.page';
import { KnigomaniaCartModal } from 'src/pages/knigomania-cart.page';
import { KnigomaniaLogin } from 'src/pages/knigomania-login.page';

interface KnigomaniaFixture {
    KnigomaniaPage: KnigomaniaMainPage;
    Login: KnigomaniaLogin;
    Cart: KnigomaniaCartModal;
}

export const test = base.extend<KnigomaniaFixture>({
    KnigomaniaPage: async ({ page }, use) => {
        const KnigomaniaPage = new KnigomaniaMainPage(page);
        await use(KnigomaniaPage);
    },
    Login: async ({ page }, use) => {
        const Login = new KnigomaniaLogin(page);
        await use(Login);
    },
    Cart: async ({ page }, use) => {
        const Cart = new KnigomaniaCartModal(page);
        await use(Cart);
    }
});
