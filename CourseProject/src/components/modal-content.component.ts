import { expect, Locator } from '@playwright/test';

export class ModalContentComponent {
    public constructor(private readonly BaseLocator: Locator) {}
    //Locators
    private get date(): Locator {
        return this.BaseLocator.locator('div.modal-content>form.modal-form>div.form-row>div.form-group>input#date');
    }
    private get currency(): Locator {
        return this.BaseLocator.locator('div.modal-content>form.modal-form>div.form-row>div.form-group>select');
    }
    private get amount(): Locator {
        return this.BaseLocator.locator('div.modal-content>form.modal-form>div.form-group>div.amount-input-wrapper>input#amount');
    }
    private get currencySymbol(): Locator {
        return this.BaseLocator.locator('div.modal-content>form.modal-form>div.form-group>div.amount-input-wrapper>span.currency-symbol');
    }
    private get textArea(): Locator {
        return this.BaseLocator.locator('div.modal-content>form.modal-form>div.form-group>textarea.form-input');
    }
    private get submitButton(): Locator {
        return this.BaseLocator.locator('div.modal-content>form.modal-form>div>button.btn-primary');
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
}
