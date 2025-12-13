import { Locator, Page } from '@playwright/test';

export class KnigomaniaLogin {
    private readonly _url = 'https://knigomania.com.ua/my-account/';

    public constructor(private readonly page: Page) {}

    private get SingInBtnIntaract(): Locator {
        return this.page.locator('//a[@class="navbar-btn"]');
    }
    private get EmailInput(): Locator {
        return this.page.locator('//input[@id="input-email"]');
    }

    private get PasswordInput(): Locator {
        return this.page.locator('//input[@id="input-password"]');
    }

    private get Submit(): Locator {
        return this.page.locator('//input[@class="pull-right btn btn-default"]');
    }
    private get LoginSuccess(): Locator {
        return this.page.locator('//i[@class="fas fa-user"]');
    }
    private get NavToMain(): Locator {
        return this.page.locator('//a[@class="logo_container"]');
    }

    public async goto(): Promise<void> {
        await this.page.goto(this._url);
    }
    public async login(): Promise<void> {
        await this.SingInBtnIntaract.click();
        await this.EmailInput.fill('mr.winfast@gmail.com');
        await this.PasswordInput.fill('test12345');
        await this.Submit.click();
        await this.page.context().storageState({ path: `${process.cwd()}/.auth/storageState.json` });
        await this.LoginSuccess.waitFor();
    }
    public async GoToMain(): Promise<void> {
        await this.NavToMain.click();
    }
}
