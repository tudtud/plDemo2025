import { test } from '../fixtures/playwrightDevFixture';
import { TopNavValues, LeftNavValues } from '../models/playwrightDev';

test.describe('Playwright Dev Page Tests', () => {

    test('Click Docs in Top Nav then Agents in Left Nav', async ({ devPage }) => {
        await devPage.topNav(TopNavValues.Docs);
        await devPage.docsLeftNav(LeftNavValues.Agents);
    });

    // Click All Values in the LeftNavValue Enum after navigating to Docs
    for (const leftNavValue of Object.values(LeftNavValues))
        test(`Navigate to Docs then click ${leftNavValue} in Left Nav`, async ({ devPage }) => {
            await devPage.topNav(TopNavValues.Docs);
            await devPage.docsLeftNav(leftNavValue);
        });

    test('Change language from Node.js to Python', async ({ devPage }) => {
        await devPage.topNav(TopNavValues.Docs);
        await devPage.languageDropdown('Python');
    });
});