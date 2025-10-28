import { expect, Locator, Page } from '@playwright/test';

export type ReverbUrlOptions = {
  yearMin?: number,
  yearMax?: number,
  category?: "electric-guitars" | "keyboards-and-synths" |
  "effects-and-pedals" | "bass-guitars" | "amps",

  brand?: "fender" | "gibson" | "gretsch" | "epiphone" |
  "rickenbacker" | "mosrite" | "moog" | "korg" |
  "roland" | "yamaha" | "boss" | "dunlop" |
  "ernie-ball" | string,
  debug?: boolean
}

export class ReverbURLBuilder {
  readonly page: Page;
  readonly searchInput: Locator
  readonly resultsLocator: Locator

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByRole('textbox', { name: 'Search Reverb for used & new' });
    this.resultsLocator = page.getByText('Results').first()
  }

  // click into search bar, type in query and press enter
  async search(query: string) {
    await this.page.goto('https://reverb.com/');
    await this.page.getByRole('textbox', { name: 'Search Reverb for used & new' }).click();
    await this.searchInput.fill(query)
    await this.searchInput.press('Enter')
    //await this.page.waitForURL('**/marketplace**');
    await this.resultsLocator.waitFor()
    expect(this.resultsLocator).toBeVisible();
  }

  async buildUrl({ yearMin, yearMax, category, brand, debug }: ReverbUrlOptions) {

    let url = 'https://reverb.com/marketplace?'
      + (yearMin ? `&year_min=${yearMin}` : '')
      + (yearMax ? `&year_max=${yearMax}` : '')
      + (category ? `&product_type=${category}` : '')
      + (brand ? `&make=${brand}` : '');

    await this.page.goto(url);

    expect(await this.page.locator('.search-overview__title').waitFor())

    // wait for visualization in UI mode
    await this.page.waitForTimeout(10000);

    if (debug) {
      console.log(`Navigated to URL: ${url}`);
    }
  }
}