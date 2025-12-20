import { expect, Locator, Page } from '@playwright/test';
export class KnigomaniaLogin {
    private readonly _url = 'https://knigomania.com.ua/my-account/';
    public constructor(private readonly page: Page) {}

    private get singInBtnIntaract(): Locator {
        return this.page.locator('//a[@class="navbar-btn"]');
    }
    private get emailInput(): Locator {
        return this.page.locator('//input[@id="input-email"]');
    }
    private get passwordInput(): Locator {
        return this.page.locator('//input[@id="input-password"]');
    }
    private get submit(): Locator {
        return this.page.locator('//input[@class="pull-right btn btn-default"]');
    }
    private get userIco(): Locator {
        return this.page.locator('//i[@class="fas fa-user"]');
    }
    private get logo(): Locator {
        return this.page.locator('//a[@class="logo_container"]');
    }

    public async goto(): Promise<void> {
        await this.page.goto(this._url);
    }
    public async login(): Promise<void> {
        await this.singInBtnIntaract.click();
        await this.emailInput.fill('mr.winfast@gmail.com');
        await this.passwordInput.fill('test12345');
        await this.submit.click();
        await this.page.context().storageState({ path: `${process.cwd()}/.auth/storageState.json` });
        await this.userIco.waitFor({ state: 'visible' });
    }
    public async navToMain(): Promise<void> {
        await this.logo.click();
    }
    public async logInSuccess(): Promise<void> {
        await expect(this.page).toHaveURL('https://knigomania.com.ua/my-account/');
    }
    public async userLogoVisible(): Promise<void> {
        await this.logo.isVisible();
    }
}
