import { Locator, Page } from '@playwright/test';

export class KnigomaniaCartModal {
    private readonly _url = 'https://knigomania.com.ua/checkout/';
    public constructor(private readonly page: Page) {}
    // Locators
    private get title(): Locator {
        return this.page.locator('//meta[@content="https://knigomania.com.ua/ua/checkout/"]');
    }
    private get cartModal(): Locator {
        return this.page.locator('(//div[@class="modal-body"])');
    }
    private get buyBtnModalFooter(): Locator {
        return this.page.locator('//div[@class="modal fade in"]//a[@class="btn btn-default"]');
    }
    private get buyBtnHeaderDesktop(): Locator {
        return this.page.locator('(//div[@class="header_cart_info"]//a[@href="https://knigomania.com.ua/checkout/"])[1]');
    }
    private get buyBtnHeaderMobile(): Locator {
        return this.page.locator('(//div[@class="header_cart_info"]//a[@href="https://knigomania.com.ua/checkout/"])[2]');
    }
    private get continueBtn(): Locator {
        return this.page.locator('(//div[@class="modal-footer"]//button[@class="btn btn-different"])[1]');
    }
    private get productCard(): Locator {
        return this.page.locator('(//div[@class="product-thumb transition"])[1]');
    }
    private get productCardBuyBtn(): Locator {
        return this.page.locator('(//div[@class="product_button_background cart_or_checkout cart"]//button[contains(@class,"btn_cart")])');
    }
    private get productInfo(): Locator {
        return this.page.locator('//tbody/tr');
    }
    private get checkoutRemoveBtn(): Locator {
        return this.page.locator('//tbody/tr/td[@class="remove"]/button[@class="btn btn-remove"]');
    }
    private get confirmDeleteBtn(): Locator {
        return this.page.locator(
            '//div[@class="modal-dialog"]//div[@class="modal-footer"]//button[@class="btn btn-default btn_are_you_sure_yes"]'
        );
    }
    private get simpleCheckout(): Locator {
        return this.page.locator('//div[@class="simplecheckout"]');
    }
    // Func
    public async goto(): Promise<void> {
        await this.page.goto(this._url);
    }
    public async checkoutPage(): Promise<void> {
        await this._url;
    }
    // public async addToCart(): Promise<void> {
    //     await this.productCard.hover();
    //     await this.productCardBuyBtn.waitFor({ state: 'visible', timeout: 5000 });
    //     await this.productCardBuyBtn.click();
    // }
    public getProductCard(index: number): Locator {
        return this.productCard.locator(`(//div[@class="product-thumb transition"])[${index}]`);
    }
    public getProductCardBuyBtn(index: number): Locator {
        return this.productCardBuyBtn.locator(
            `(//div[@class="product_button_background cart_or_checkout cart"]//button[contains(@class,"btn_cart")])[${index}]`
        );
    }
    public async addProductToCart(index: number): Promise<void> {
        await this.getProductCard(index).hover();
        await this.getProductCardBuyBtn(index).waitFor({ state: 'visible', timeout: 5000 });
        const addToCartBtn = this.getProductCardBuyBtn(index);
        // await addToCartBtn.hover();
        await addToCartBtn.click();
    }
    public async confirmPurchase(): Promise<void> {
        await this.buyBtnModalFooter.click({ force: true });
    }
    public async verifyCheckoutPage(): Promise<void> {
        await this.title.isVisible();
    }
    public async verifyProductInCart(): Promise<void> {
        await this.productInfo.isVisible();
    }
    public async removeProductFromCart(): Promise<void> {
        await this.page.waitForTimeout(500);
        await this.checkoutRemoveBtn.click();
    }
    public async confirmDeleteProductCheckout(): Promise<void> {
        await this.page.waitForTimeout(500);
        await this.confirmDeleteBtn.click();
    }
    public async verifyEmptyCart(): Promise<void> {
        await this.simpleCheckout.isVisible();
    }
}
