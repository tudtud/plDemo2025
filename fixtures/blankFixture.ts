import { test as base } from '@playwright/test';
import { BlankModel } from '../models/blankModel';

type MyFixtures = {
  blank: BlankModel;
};

export const test = base.extend<MyFixtures>({
  blank: async ({ page }, use) => {
    const model = new BlankModel(page);
    await use(model);
  }
});

export { expect } from '@playwright/test';
