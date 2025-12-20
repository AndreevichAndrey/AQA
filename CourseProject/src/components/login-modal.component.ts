import { Locator } from '@playwright/test';

export class LoginModal {
    public constructor(private readonly BaseLocator: Locator) {}
    //Locators
    private get emailInput(): Locator {
        return this.BaseLocator.locator('//div[@class="login-field"]/input[@id="login-email"]');
    }
    private get passwordInput(): Locator {
        return this.BaseLocator.locator('//div[@class="login-field"]/input[@id="login-password"]');
    }
    private get registerBtn(): Locator {
        return this.BaseLocator.locator('//button[@type="submit"]');
    }
    private get logInError(): Locator {
        return this.BaseLocator.locator('//div[@class="login-error-alert"]');
    }
    //Functions
    public async fillEmail(email: string): Promise<void> {
        await this.emailInput.fill(email);
    }
    public async fillPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }
    public async clickLogInBtn(): Promise<void> {
        await this.registerBtn.click();
    }
    public async verifyLogInError(): Promise<string> {
        await this.logInError.waitFor({ state: 'visible', timeout: 5000 });
        const errorText = await this.logInError.textContent();
        return errorText?.trim() || '';
    }
}
////form[@class="login-modal-form"]
