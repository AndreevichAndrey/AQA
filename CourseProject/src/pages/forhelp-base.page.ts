import { Page, Locator, expect } from '@playwright/test';
import { RegisterModal } from 'src/components/register-modal.component';
import { LoginModal } from 'src/components/login-modal.component';
import { NavContainerComponent } from 'src/components/nav-container.component';

export class ForHelpBasePage {
    private readonly _url = 'https://new.fophelp.pro/';
    public readonly RegisterModal: RegisterModal;
    public readonly LoginModal: LoginModal;
    public readonly NavContainer: NavContainerComponent;
    private currentTheme = '';
    public constructor(protected readonly page: Page) {
        this.RegisterModal = new RegisterModal(page.locator('//form[@class="register-modal-form"]'));
        this.LoginModal = new LoginModal(page.locator('//form[@class="login-modal-form"]'));
        this.NavContainer = new NavContainerComponent(page.locator('//div[@class="nav-menu"]'));
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
    private get pageThemeBtn(): Locator {
        return this.page.locator(
            '//div[@class="header-container"]//div[@class="header-nav"]/div[@class="desktop-nav"]/button[@class="theme-toggle"]'
        );
    }
    private get UserProfile(): Locator {
        return this.page.locator('//div[@class="user-info"]');
    }
    private get themeToggle(): Promise<Locator> {
        return (async () => {
            const body = this.page.locator('//html');
            const classes = (await body.getAttribute('class')) || '';

            if (classes.includes('light')) {
                return this.page.locator('//html[contains(@class, "light-theme")]');
            } else {
                return this.page.locator('//html[contains(@class, "dark-theme")]');
            }
        })();
    }
    //Functions
    public async goto(): Promise<void> {
        await this.page.goto(this._url);
        // Store initial theme
        this.currentTheme = await this.getCurrentTheme();
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
    public async checkUserInfo(): Promise<void> {
        await expect(this.UserProfile).toBeVisible();
    }
    public async toggleTheme(): Promise<void> {
        await this.pageThemeBtn.click();
        await this.page.waitForTimeout(500); // Wait for theme transition
    }
    public async verifyThemeChanged(): Promise<void> {
        const newTheme = await this.getCurrentTheme();
        expect(newTheme).not.toBe(this.currentTheme);
        expect(newTheme).toMatch(/light|dark/);
    }
    public async getCurrentTheme(): Promise<string> {
        const body = this.page.locator('html');
        const classes = (await body.getAttribute('class')) || '';
        return classes;
    }
    // public async reloadPage(): Promise<void> {
    //     await this.page.reload();
    //     await expect(this.page.locator('html')).toHaveAttribute;
    // }
}
