import { test as base } from '@playwright/test';
import { ReverbURLBuilder } from '../models/reverb';

type MyFixtures = {
  reverb: ReverbURLBuilder;
};

export const test = base.extend<MyFixtures>({
  reverb: async ({ page }, use) => {
    const todoPage = new ReverbURLBuilder(page);
    await use(todoPage);
  }
});
export { expect } from '@playwright/test';