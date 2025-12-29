import { test } from 'fixtures/forhelp.fixture';
import { validUser } from 'src/config/users';

test.describe('Expenses test', () => {
    test.beforeEach(async ({ ForHelpMainPage, ForHelpExpensePage }) => {
        await ForHelpExpensePage.goto();
        await ForHelpMainPage.login(validUser.email, validUser.password);
    });

    test('Verify expenses page title', async ({ ForHelpExpensePage }) => {
        await ForHelpExpensePage.verifyTitleText('Витрати');
    });

    test('User can add and delete expense', async ({ ForHelpExpensePage }) => {
        const date = '2024-06-20';
        const currency = 'USD';
        const amount = '75';
        const comment = 'Office supplies';

        await ForHelpExpensePage.clickAddExpenseButton();
        await ForHelpExpensePage.ModalContentComponent.setDate(date);
        await ForHelpExpensePage.ModalContentComponent.setCurrency(currency);
        await ForHelpExpensePage.ModalContentComponent.setAmount(amount);
        await ForHelpExpensePage.ModalContentComponent.addComment(comment);
        await ForHelpExpensePage.submitModalAndWaitForResponse();
        await ForHelpExpensePage.verifyToastMessage('Expense added successfully');
        await ForHelpExpensePage.deleteIncomeFromTable();
        await ForHelpExpensePage.verifyTableIsHidden();
    });
});
