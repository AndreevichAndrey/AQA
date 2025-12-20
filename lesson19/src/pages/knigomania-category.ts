import { Page } from '@playwright/test';
import { KnigomaniaMainPage } from './knigomania-base.page';

export class KnigomaniaCategoryPage extends KnigomaniaMainPage {
    public constructor(page: Page) {
        super(page);
    }
}
