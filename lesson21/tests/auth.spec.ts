import { test } from 'fixtures/knigomania.fixture';

test.describe('Auth', () => {
    test('User log in and Navigate to home page', async ({ KnigomaniaPage, Login }) => {
        await KnigomaniaPage.goto();
        await Login.login();
        await Login.logInSuccess();
        await Login.userLogoVisible();
        await Login.navToMain();
        await KnigomaniaPage.verifyUserLoggedIn();
    });
});
