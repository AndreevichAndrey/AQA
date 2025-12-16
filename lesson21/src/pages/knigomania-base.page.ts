import { Locator, Page } from '@playwright/test';
import { TabListComponent } from 'src/components/categorytablist.component';
import { KnigomaniaLogin } from './knigomania-login.page';

export class KnigomaniaMainPage {
    private readonly _url = 'https://knigomania.com.ua';
    public constructor(protected readonly page: Page) {
        this.TabListComponent = new TabListComponent(page.locator('//div[@class="panel panel-default"]/div[@class="panel-heading"]'));
        this.KnigomaniaLogin = new KnigomaniaLogin(page);
    }
    public readonly KnigomaniaLogin: KnigomaniaLogin;
    public readonly TabListComponent: TabListComponent;
    // Locators
    private get closeBannerBtn(): Locator {
        return this.page.locator('//div[@class="needsclick  kl-private-reset-css-Xuajs1"]/button[@aria-label="Close dialog"]');
    }
    private get logo(): Locator {
        return this.page.locator('(//a[@class="logo_container"]//img[@class="img-responsive logo"])');
    }
    private get collapseMainCategoryTab(): Locator {
        return this.page.locator('//a[@aria-controls="list_category_left"]');
    }
    public async goto(): Promise<void> {
        await this.page.goto(this._url);
    }
    public async expandCategoryList(): Promise<void> {
        await this.collapseMainCategoryTab.click();
    }
    public async login(): Promise<void> {
        const login = new KnigomaniaLogin(this.page);
        await login.goto();
        await login.login();
    }
    public async verifyUserLoggedIn(): Promise<void> {
        await this.logo.isVisible();
    }
    public async closeBannerIfVisible(): Promise<void> {
        if (await this.closeBannerBtn.isVisible()) {
            await this.closeBannerBtn.click();
        }
    }
}
