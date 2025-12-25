import { Locator } from '@playwright/test';

export class RegisterModal {
    public constructor(private readonly BaseLocator: Locator) {}
    //Locators
    private get emailInput(): Locator {
        return this.BaseLocator.locator('/div[@class="register-field"]/input[@type="email"]');
    }
    private get passwordInput(): Locator {
        return this.BaseLocator.locator('/div[@class="register-field"]/input[@type="password"]');
    }
    private get registerBtn(): Locator {
        return this.BaseLocator.locator('/button[@type="submit"]');
    }
    //Functions
    public async fillEmail(email: string): Promise<void> {
        await this.emailInput.fill(email);
    }
    public async fillPassword(password: string): Promise<void> {
        await this.passwordInput.nth(0).fill(password);
        await this.passwordInput.nth(1).fill(password);
    }
    public async clickRegisterBtn(): Promise<void> {
        await this.registerBtn.click();
    }
}
