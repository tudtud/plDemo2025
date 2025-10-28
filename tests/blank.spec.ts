import { test } from '../fixtures/blankFixture';

test.describe('Blank model smoke', () => {
  test('navigates to about:blank and gets title', async ({ blank }) => {
    await blank.goto();
    const t = await blank.title();
    // trivial assertion to ensure fixture/model wiring works
    test.expect(typeof t).toBe('string');
  });
});
