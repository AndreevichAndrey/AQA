import { test } from 'fixtures/forhelp.fixture';

test.describe('Page Modal', () => {
    test.beforeEach(async ({ ForHelpIncomePage }) => {
        await ForHelpIncomePage.goto();
        await ForHelpIncomePage.clickAddIncomeButton();
    });
    test('Navigate to incomes page and verify title', async ({ ForHelpIncomePage }) => {
        await ForHelpIncomePage.verifyTitleText('Прибутки');
    });
    test('User is able to Set Date', async ({ ForHelpIncomePage }) => {
        const date = '2024-06-15';
        await ForHelpIncomePage.ModalContentComponent.setDate(date);
    });
    test('User is able to Set Currency USD', async ({ ForHelpIncomePage }) => {
        const currency = 'USD';
        await ForHelpIncomePage.ModalContentComponent.setCurrency(currency);
        await ForHelpIncomePage.ModalContentComponent.verifyCurrencySymbol('$');
    });
    test('User is able to Set Currency UAH', async ({ ForHelpIncomePage }) => {
        const currency = 'UAH';
        await ForHelpIncomePage.ModalContentComponent.setCurrency(currency);
        await ForHelpIncomePage.ModalContentComponent.verifyCurrencySymbol('₴');
    });
    test('User is able to Set Currency EUR', async ({ ForHelpIncomePage }) => {
        const currency = 'EUR';
        await ForHelpIncomePage.ModalContentComponent.setCurrency(currency);
        await ForHelpIncomePage.ModalContentComponent.verifyCurrencySymbol('€');
    });
    test('User is able to Set Amount', async ({ ForHelpIncomePage }) => {
        const amount = '100';
        await ForHelpIncomePage.ModalContentComponent.setAmount(amount);
    });
    test('Text Area Placeholder is visible', async ({ ForHelpIncomePage }) => {
        const expectedText = 'Опишіть деталі запису...';
        await ForHelpIncomePage.ModalContentComponent.verifyTextAreaPlaceholder(expectedText);
    });
    test('User is able to add comment in Text Area', async ({ ForHelpIncomePage }) => {
        const comment = 'Test comment';
        await ForHelpIncomePage.ModalContentComponent.addComment(comment);
        await ForHelpIncomePage.ModalContentComponent.verifyCommentValue(comment);
    });
});
