import { Page } from '@playwright/test';

export enum TopNavValues {
    Docs = "Docs",
    API = "API",
    Community = "Community",
    Blog = "Blog",
    GitHub = "GitHub",
}

export enum LeftNavValues {
    GettingStarted = "Getting started",
    Guides = "Guides",
    Agents = "Agents",
    GeneratingTests = "Generating tests",
    AutoWaiting = "Auto-waiting",
}

export class PlaywrightDevPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async topNav(locatorLabel: TopNavValues) {
        await this.page.getByRole('link', { name: `${locatorLabel}` }).click();
    }

    async docsLeftNav(section: LeftNavValues) {
        await this.page.getByRole('link', { name: section }).click();
        await this.page.waitForURL('**/docs/**');
    }

    // example of using a template literal instead of enum for simplicity
    async languageDropdown(language: 'Node.js' | 'Python' | 'Java' | '.NET') {
        await this.page.getByRole('button', { name: 'Node.js' }).hover();
        await this.page.getByRole('link', { name: language }).click();
        await this.page.waitForLoadState('networkidle');

    }
}   