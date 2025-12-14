import { Locator } from '@playwright/test';

export class TabListComponent {
    public constructor(private readonly Baselocator: Locator) {}

    // private get allTab(): Locator {
    //     return this.Baselocator.locator('//div[@class="panel panel-default"]');
    // }
    private get singleTab(): Locator {
        return this.Baselocator.locator('//div[@class="panel panel-default"]/div[@class="panel-heading"][count(a)=1]/a');
    }
    private get expandepleTab(): Locator {
        return this.Baselocator.locator('//div[@class="panel panel-default"]/div[@class="panel-heading"]/a[@role="button"]');
    }
    private get expandTabBtn(): Locator {
        return this.Baselocator.locator('//a[contains(@data-toggle, "collapse") and contains(@aria-controls, "list_category_left")]');
    }
    private getSingleTab(tabItem: string): Locator {
        return this.Baselocator.locator(
            `//div[@class="panel panel-default"]/div[@class="panel-heading"][count(a)=1]/a[text() = "${tabItem}"`
        );
    }
    private getExpandepleTab(tabItem: string): Locator {
        return this.Baselocator.locator(
            `div[@class="panel panel-default"]/div[@class="panel-heading"][count(a)=2 and a[1][contains(text(), "${tabItem}")]]`
        );
    }

    private _menuItems: string[] = [];

    public async getAllTabs(): Promise<string[]> {
        const menuItems = [];
        const singleItems = await this.singleTab.all();
        for (const item of singleItems) {
            menuItems.push((await item.textContent()) as string);
        }
        const expandebleItems = await this.expandepleTab.all();
        for (const item of expandebleItems) {
            menuItems.push((await item.textContent()) as string);
        }
        return menuItems;
    }

    public async clickTabItem(tabItem: string): Promise<void> {
        const Allitems = await this.getAllTabs();
        if (!Allitems.includes(tabItem)) {
            throw new Error(`Tab "${tabItem}" not found`);
        }
        const single = this.Baselocator.locator(this.getSingleTab(tabItem));
        const expandable = this.Baselocator.locator(this.getExpandepleTab(tabItem));

        if (await single.isVisible()) {
            await single.click();
        } else {
            await expandable.click();
        }
    }

    public async getNestedTab(nestedTab: Locator): Promise<TabListComponent[]> {
        const nestedTabs = await nestedTab.locator('//div[@class="panel panel-default"]/div[@role="tabpanel"]').all();
        const nestedTabComponents: TabListComponent[] = [];
        for (const tab of nestedTabs) {
            nestedTabComponents.push(new TabListComponent(tab));
        }
        return nestedTabComponents;
    }
    public async expandTab(): Promise<void> {
        await this.expandTabBtn.waitFor({ state: 'visible' });
        await this.expandTabBtn.click();
        await this.expandepleTab.first().waitFor({ state: 'visible' });
    }
}
