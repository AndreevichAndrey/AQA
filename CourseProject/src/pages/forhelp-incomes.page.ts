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
    public async submitModalAndWaitForResponse(): Promise<void> {
        await this.ModalContentComponent.clickSubmitAndHandleResponse(this.tableContainer, this.toastMessage);
    }
    public async verifyTableIsVisible(): Promise<void> {
        await this.tableContainer.waitFor({ state: 'visible', timeout: 5000 });
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
