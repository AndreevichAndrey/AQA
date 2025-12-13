import { Locator, Page } from '@playwright/test';

export class KnigomaniaCartModal {
    public constructor(private readonly page: Page) {}

    public get CartModal(): Locator {
        return this.page.locator('(//div[@class="modal-body"]');
    }
    public get BuyBtnFooter(): Locator {
        return this.page.locator('//div[@class="modal fade in"]//a[@class="btn btn-default"]');
    }
    public get BuyBtnHeaderDesktop(): Locator {
        return this.page.locator('(//div[@class="header_cart_info"]//a[@href="https://knigomania.com.ua/checkout/"])[1]');
    }
    public get BuyBtnHeaderMobile(): Locator {
        return this.page.locator('(//div[@class="header_cart_info"]//a[@href="https://knigomania.com.ua/checkout/"])[2]');
    }
    public get ContinueBtn(): Locator {
        return this.page.locator('(//div[@class="modal-footer"]//button[@class="btn btn-different"])[1]');
    }
}
