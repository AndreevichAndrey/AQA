import { Page, Locator } from '@playwright/test';
import { RegisterModal } from 'src/components/register-modal.component';
import { LoginModal } from 'src/components/login-modal.component';

export class ForHelpBasePage {
    private readonly _url = 'https://new.fophelp.pro/';
    public readonly RegisterModal: RegisterModal;
    public readonly LoginModal: LoginModal;
    public constructor(protected readonly page: Page) {
        this.RegisterModal = new RegisterModal(page.locator('//form[@class="register-modal-form"]'));
        this.LoginModal = new LoginModal(page.locator('//form[@class="login-modal-form"]'));
    }

    // Locators
    private get logo(): Locator {
        return this.page.locator('//div[@class="header-container"]/div[@class="header-brand"]/div[@class="brand-logo"]');
    }
    private get logInBtn(): Locator {
        return this.page.locator('//div[@class="header-container"]//div[@class="desktop-nav"]/button[@class="nav-button signin-button"]');
    }
    private get registerBtn(): Locator {
        return this.page.locator('//div[@class="header-container"]//div[@class="desktop-nav"]/button[@class="nav-button register-button"]');
    }
    private get themeToggleBtn(): Locator {
        return this.page.locator(
            '//div[@class="header-container"]//div[@class="header-nav"]/div[@class="desktop-nav"]/button[@class="theme-toggle"]'
        );
    }
    //Functions
    public async goto(): Promise<void> {
        await this.page.goto(this._url);
    }
    public async openLoginModal(): Promise<void> {
        await this.logInBtn.click();
    }
    public async login(email: string, password: string): Promise<void> {
        await this.openLoginModal();
        await this.LoginModal.fillEmail(email);
        await this.LoginModal.fillPassword(password);
        await this.LoginModal.clickLogInBtn();
    }
}
