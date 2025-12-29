import { Locator, expect } from '@playwright/test';

export class NavContainerComponent {
    public constructor(private readonly BaseLocator: Locator) {}

    private get singleItem(): Locator {
        return this.BaseLocator.locator('.//div[@class="nav-item "]/a');
    }
    private get dropDownItem(): Locator {
        return this.BaseLocator.locator('.//div[@class="nav-item "]/div[@class="dropdown-menu "]');
    }
    private get nestedDropDownItem(): Locator {
        return this.BaseLocator.locator('.//div[@class="nav-item "]/div[@class="dropdown-menu "]/a');
    }

    //Functions

    public async getMenuItemsText(): Promise<string[]> {
        const menuItems = this.BaseLocator.locator('.nav-item > a, .nav-item > button, .dropdown-menu > a');
        const count = await menuItems.count();

        const actualTexts: string[] = [];
        for (let i = 0; i < count; i++) {
            actualTexts.push((await menuItems.nth(i).textContent())?.trim() || '');
        }

        return actualTexts.map((text) => text.replace('▼', '').trim());
    }

    public async getMenuItemCount(): Promise<number> {
        const menuItems = this.BaseLocator.locator('.nav-item > a, .nav-item > button, .dropdown-menu > a');
        return await menuItems.count();
    }

    public async isNavMenuVisible(): Promise<boolean> {
        const isVisible = await this.BaseLocator.isVisible();
        return isVisible;
    }

    public async clickMenuItemByText(itemText: string): Promise<void> {
        const menuItem = this.BaseLocator.locator(`xpath=.//a[contains(text(), "${itemText}")]`);
        await menuItem.click();
    }

    public async hoverMenuItemByText(itemText: string): Promise<void> {
        const menuItem = this.BaseLocator.locator(`.//a[contains(text(), "${itemText}")] | .//button[contains(text(), "${itemText}")]`);
        await menuItem.hover();
    }

    public async verifyMenuItemsAreClickable(): Promise<void> {
        const menuItems = this.BaseLocator.locator('.nav-item > a, .nav-item > button, .dropdown-menu > a');
        const count = await menuItems.count();

        for (let i = 0; i < count; i++) {
            const isEnabled = await menuItems.nth(i).isEnabled();
            expect(isEnabled).toBeTruthy();
        }
    }
}
