import { Locator } from '@playwright/test';

export class NavContainerComponent {
    public constructor(private readonly BaseLocator: Locator) {}

    private get singleItem(): Locator {
        return this.BaseLocator.locator('//div[@class="nav-item "]/a');
    }
    private get dropDownItem(): Locator {
        return this.BaseLocator.locator('//div[@class="nav-item "]/div[@class="dropdown-menu "]');
    }
    private get nestedDropDownItem(): Locator {
        return this.BaseLocator.locator('//div[@class="nav-item "]/div[@class="dropdown-menu "]/a');
    }
}
