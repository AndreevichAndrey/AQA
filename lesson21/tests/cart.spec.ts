import { test } from 'fixtures/knigomania.fixture';

test.beforeEach(async ({ Login, KnigomaniaPage }) => {
    await KnigomaniaPage.goto();
    await Login.login();
    await Login.navToMain();
});

test('Product cart', { tag: '@Cart' }, async ({ Cart, KnigomaniaPage }) => {
    await test.step('Add product', async () => {
        await Cart.addProductToCart(1);
        await KnigomaniaPage.closeBannerIfVisible();
        await Cart.confirmPurchase();
        await Cart.verifyCheckoutPage();
        await Cart.verifyProductInCart();
    });
    await test.step('Remove product', async () => {
        await Cart.removeProductFromCart();
        await Cart.confirmDeleteProductCheckout();
        await Cart.verifyEmptyCart();
    });
});
