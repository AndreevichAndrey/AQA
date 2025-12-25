import { test } from 'fixtures/forhelp.fixture';
import { validUser } from '../../src/config/users';

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
        await ForHelpIncomePage.ModalContentComponent.setDate(date);
        await ForHelpIncomePage.ModalContentComponent.setCurrency(currency);
        await ForHelpIncomePage.ModalContentComponent.setAmount(amount);
        await ForHelpIncomePage.ModalContentComponent.addComment(comment);
        await ForHelpIncomePage.submitModalAndWaitForResponse();
        await ForHelpIncomePage.deleteIncomeFromTable();
        await ForHelpIncomePage.saveStorageState('src/data/auth/addedOneIncomeStorageState.json');
        await ForHelpIncomePage.verifyTableIsHidden();
    });
});
