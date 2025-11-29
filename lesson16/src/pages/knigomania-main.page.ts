import { Locator, Page } from '@playwright/test';

export class KnigomaniaMainPage {
    private readonly _url = 'https://knigomania.com.ua';
    public constructor(private readonly page: Page) {}

    public get ProductCard(): Locator {
        return this.page.locator('(//div[@class="product-thumb transition"])[1]');
    }
    public get ProductCardBuyBtn(): Locator {
        return this.ProductCard.locator('//button[@class="btn btn-default btn_cart"]');
    }
    public async goto(): Promise<void> {
        await this.page.goto(this._url);
    }
    public async addToCart(): Promise<void> {
        await this.ProductCard.hover();
        await this.ProductCardBuyBtn.waitFor({ state: 'visible', timeout: 5000 });
        await this.ProductCardBuyBtn.click();
    }
}
