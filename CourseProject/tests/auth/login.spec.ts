import { test } from 'fixtures/forhelp.fixture';
import { expect } from '@playwright/test';
import { validUser, invalidUser } from '../../src/config/users';

test.describe('Log In tests', () => {
    test('Log In with valid credentials', async ({ ForHelpMainPage }) => {
        await ForHelpMainPage.goto();
        await ForHelpMainPage.login(validUser.email, validUser.password);
        await ForHelpMainPage.checkUserInfo();
    });
    test('Log In with invalid credentials', async ({ ForHelpMainPage }) => {
        await ForHelpMainPage.goto();
        await ForHelpMainPage.login(invalidUser.email, invalidUser.password);
        const errorMessage = await ForHelpMainPage.LoginModal.verifyLogInError();
        expect(errorMessage).toBe('Invalid username or password');
    });
});
