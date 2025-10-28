import { Locator, Page } from '@playwright/test';

export class BlankModel {
    readonly page: Page;
    readonly root: Locator;

    constructor(page: Page) {
        this.page = page;
        this.root = page.locator('body');
    }

    async goto(url = 'about:blank') {
        await this.page.goto(url);
    }

    async title() {
        return this.page.title();
    }
}
