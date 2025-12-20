import { test } from 'fixtures/forhelp.fixture';
import { expect } from '@playwright/test';

test.describe('Log In tests', () => {
    test('Log In with valid credentials', async ({ ForHelpMainPage }) => {
        await ForHelpMainPage.goto();
        await ForHelpMainPage.login('mr.winfast@gmail.com', 'Pa$$word1');
    });
    test('Log In with invalid credentials', async ({ ForHelpMainPage }) => {
        await ForHelpMainPage.goto();
        await ForHelpMainPage.login('test1223@gmail.com', 'password');
        const errorMessage = await ForHelpMainPage.LoginModal.verifyLogInError();
        expect(errorMessage).toBe('Invalid username or password');
    });
});
