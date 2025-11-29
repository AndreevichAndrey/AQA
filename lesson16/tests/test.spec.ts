import { test, expect } from '@playwright/test';
import { KnigomaniaCartModal } from 'src/pages/knigomania-cart-modal.page';
import { KnigomaniaLogin } from 'src/pages/knigomania-login.page';
import { KnigomaniaMainPage } from 'src/pages/knigomania-main.page';

test.describe('Auth', () => {
    test('login', async ({ page }) => {
        const KnigomaniaPageLogin = new KnigomaniaLogin(page);
        const Main = new KnigomaniaMainPage(page);
        await Main.goto();
        await KnigomaniaPageLogin.login();
        await expect(page).toHaveURL('https://knigomania.com.ua/my-account/');
        await KnigomaniaPageLogin.GoToMain();
        await expect(page).toHaveURL('https://knigomania.com.ua/');
    });
});

test.describe('Product cart', () => {
    test('Add product', async ({ page }) => {
        const Main = new KnigomaniaMainPage(page);
        const CartModal = new KnigomaniaCartModal(page);
        await Main.goto();
        await Main.addToCart();
        await CartModal.BuyBtnFooter.click();
        await expect(page).toHaveURL('https://knigomania.com.ua/checkout/');
    });
});
