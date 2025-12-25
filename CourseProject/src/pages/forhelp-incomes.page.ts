import { expect, Locator, Page } from '@playwright/test';
import { ModalContentComponent } from 'src/components/modal-content.component';

export class ForHelpIncomesPage {
    private readonly _url = 'https://new.fophelp.pro/incomes';
    public readonly ModalContentComponent: ModalContentComponent;
    public constructor(protected readonly page: Page) {
        this.ModalContentComponent = new ModalContentComponent(page.locator('div.modal-content'));
    }
    //Locators
    private get headerTitle(): Locator {
        return this.page.locator('h1>span.page-name');
    }
    private get addIncomeBtn(): Locator {
        return this.page.locator('div.filters-section>div.filters-container>div.filter-actions>button.add-button');
    }
    private get date(): Locator {
        return this.page.locator('div.modal-content>form.modal-form>div.form-row>div.form-group>input#date');
    }
    private get currency(): Locator {
        return this.page.locator('div.modal-content>form.modal-form>div.form-row>div.form-group>select');
    }
    private get amount(): Locator {
        return this.page.locator('div.modal-content>form.modal-form>div.form-group>div.amount-input-wrapper>input#amount');
    }
    private get currencySymbol(): Locator {
        return this.page.locator('div.modal-content>form.modal-form>div.form-group>div.amount-input-wrapper>span.currency-symbol');
    }
    private get textArea(): Locator {
        return this.page.locator('div.modal-content>form.modal-form>div.form-group>textarea.form-input');
    }
    private get submitButton(): Locator {
        return this.page.locator('div.modal-content>form.modal-form>div>button.btn-primary');
    }
    private get tableContainer(): Locator {
        return this.page.locator('div.income-table-container');
    }
    private get deleteBtn(): Locator {
        return this.page.locator('div.income-table-container button.delete-btn');
    }
    private get toastMessage(): Locator {
        return this.page.locator('div.toast-container');
    }
    //Functions
    public async goto(): Promise<void> {
        await this.page.goto(this._url);
    }
    public async verifyTitleText(expectedText: string): Promise<void> {
        await expect(this.headerTitle).toHaveText(expectedText);
    }
    public async clickAddIncomeButton(): Promise<void> {
        await this.addIncomeBtn.click();
    }
    public async setDate(date: string): Promise<void> {
        await this.date.fill(date);
    }
    public async setCurrency(currency: string): Promise<void> {
        await this.currency.selectOption({ value: currency });
    }
    public async setAmount(amount: string): Promise<void> {
        await this.amount.fill(amount);
    }
    public async verifyCurrencySymbol(expectedSymbol: string): Promise<void> {
        await expect(this.currencySymbol).toHaveText(expectedSymbol);
    }
    public async verifyTextAreaPlaceholder(expectedText: string): Promise<void> {
        await expect(this.textArea).toHaveAttribute('placeholder', expectedText);
    }
    public async addComment(comment: string): Promise<void> {
        await this.textArea.fill(comment);
    }
    public async verifyCommentValue(expectedComment: string): Promise<void> {
        await expect(this.textArea).toHaveValue(expectedComment);
    }
    public async clickSubmitButton(): Promise<void> {
        await this.submitButton.click();
    }
    public async verifyTableIsVisible(): Promise<void> {
        await expect(this.tableContainer).toBeVisible();
    }
    public async verifyTableIsHidden(): Promise<void> {
        await expect(this.tableContainer).toBeHidden({ timeout: 5000 });
    }
    public async clickDeleteIncomeFromTable(): Promise<void> {
        await this.deleteBtn.first().click();
    }
    public async saveStorageState(filePath: string): Promise<void> {
        await this.page.context().storageState({ path: filePath });
    }
    public async deleteIncomeFromTable(): Promise<void> {
        const deleteBtn = this.deleteBtn.first();
        this.page.once('dialog', async (dialog) => {
            await dialog.accept();
        });
        await deleteBtn.click();
    }
    public async verifyToastMessage(expectedMessage: string): Promise<void> {
        await expect(this.toastMessage).toHaveText(expectedMessage);
    }
}
