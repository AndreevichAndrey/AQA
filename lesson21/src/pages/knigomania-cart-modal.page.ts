import { Locator, Page } from '@playwright/test';

export class KnigomaniaCartModal {
    private readonly _url = 'https://knigomania.com.ua/checkout/';
    public constructor(private readonly page: Page) {}

    public async goto(): Promise<void> {
        await this.page.goto(this._url);
    }
    public get cartModal(): Locator {
        return this.page.locator('(//div[@class="modal-body"])');
    }
    public get buyBtnFooter(): Locator {
        return this.page.locator('//div[@class="modal fade in"]//a[@class="btn btn-default"]');
    }
    public get buyBtnHeaderDesktop(): Locator {
        return this.page.locator('(//div[@class="header_cart_info"]//a[@href="https://knigomania.com.ua/checkout/"])[1]');
    }
    public get buyBtnHeaderMobile(): Locator {
        return this.page.locator('(//div[@class="header_cart_info"]//a[@href="https://knigomania.com.ua/checkout/"])[2]');
    }
    public get continueBtn(): Locator {
        return this.page.locator('(//div[@class="modal-footer"]//button[@class="btn btn-different"])[1]');
    }
}
