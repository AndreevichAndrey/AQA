import { test } from 'fixtures/forhelp.fixture';
import { validUser } from '../../src/config/users';
test.describe('ForHelp - Incomes Page Modal', () => {
    test.beforeEach(async ({ ForHelpIncomePage }) => {
        await ForHelpIncomePage.goto();
        await ForHelpIncomePage.clickAddIncomeButton();
    });
    test('Navigate to incomes page and verify title', async ({ ForHelpIncomePage }) => {
        await ForHelpIncomePage.verifyTitleText('Прибутки');
    });
    test('User is able to Set Date', async ({ ForHelpIncomePage }) => {
        const date = '2024-06-15';
        await ForHelpIncomePage.setDate(date);
    });
    test('User is able to Set Currency USD', async ({ ForHelpIncomePage }) => {
        const currency = 'USD';
        await ForHelpIncomePage.setCurrency(currency);
        await ForHelpIncomePage.verifyCurrencySymbol('$');
    });
    test('User is able to Set Currency UAH', async ({ ForHelpIncomePage }) => {
        const currency = 'UAH';
        await ForHelpIncomePage.setCurrency(currency);
        await ForHelpIncomePage.verifyCurrencySymbol('₴');
    });
    test('User is able to Set Currency EUR', async ({ ForHelpIncomePage }) => {
        const currency = 'EUR';
        await ForHelpIncomePage.setCurrency(currency);
        await ForHelpIncomePage.verifyCurrencySymbol('€');
    });
    test('User is able to Set Amount', async ({ ForHelpIncomePage }) => {
        const amount = '100';
        await ForHelpIncomePage.setAmount(amount);
    });
    test('Text Area Placeholder is visible', async ({ ForHelpIncomePage }) => {
        const expectedText = 'Опишіть деталі запису...';
        await ForHelpIncomePage.verifyTextAreaPlaceholder(expectedText);
    });
    test('User is able to add comment in Text Area', async ({ ForHelpIncomePage }) => {
        const comment = 'Test comment';
        await ForHelpIncomePage.addComment(comment);
        await ForHelpIncomePage.verifyCommentValue(comment);
    });
});
test.describe('Income test', () => {
    test.beforeEach(async ({ ForHelpMainPage, ForHelpIncomePage }) => {
        await ForHelpIncomePage.goto();
        await ForHelpMainPage.login(validUser.email, validUser.password);
    });
    test('User can add and delete income', async ({ ForHelpIncomePage }) => {
        const date = '2024-06-15';
        const currency = 'USD';
        const amount = '150';
        const comment = 'Salary for June';

        await ForHelpIncomePage.clickAddIncomeButton();
        await ForHelpIncomePage.setDate(date);
        await ForHelpIncomePage.setCurrency(currency);
        await ForHelpIncomePage.setAmount(amount);
        await ForHelpIncomePage.addComment(comment);
        await ForHelpIncomePage.clickSubmitButton();
        await ForHelpIncomePage.verifyTableIsVisible();
        await ForHelpIncomePage.deleteIncomeFromTable();
        await ForHelpIncomePage.saveStorageState('src/data/auth/addedOneIncomeStorageState.json');
        await ForHelpIncomePage.verifyTableIsHidden();
    });
});
