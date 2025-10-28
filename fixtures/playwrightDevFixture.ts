import { test as base } from '@playwright/test';
import { PlaywrightDevPage } from '../models/playwrightDev';

type MyFixtures = {
    devPage: PlaywrightDevPage;
};

export const test = base.extend<MyFixtures>({
    devPage: async ({ page }, use) => {
        const todoPage = new PlaywrightDevPage(page);
        await page.goto('https://playwright.dev/');
        await use(todoPage);
    }
});
export { expect } from '@playwright/test';