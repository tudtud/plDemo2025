import { expect, Locator, Page } from '@playwright/test';

export enum Brand {
  fender = "fender",
  gibson = "gibson",
  gretsch = "gretsch",
  epiphone = "epiphone",
  rickenbacker = "rickenbacker",
  mosrite = "mosrite",
  moog = "moog",
  korg = "korg",
  roland = "roland",
  yamaha = "yamaha",
  boss = "boss",
  dunlop = "dunlop",
  ernie_ball = "ernie-ball"
}

export enum Category {
  electricGuitars = "electric-guitars",
  keyboardsAndSynths = "keyboards-and-synths",
  effectsAndPedals = "effects-and-pedals",
  bassGuitars = "bass-guitars",
  amps = "amps"
}

export type ReverbUrlOptions = {
  yearMin?: number,
  yearMax?: number,
  category?: Category | string,
  brand?: Brand | string,
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

  // use explicit parameters to build URL and navigate for clarity in test runner. field names will now display.
  async buildUrl({ yearMin, yearMax, category, brand, debug }: ReverbUrlOptions) {

    let url = 'https://reverb.com/marketplace?'
      + (yearMin ? `&year_min=${yearMin}` : '')
      + (yearMax ? `&year_max=${yearMax}` : '')
      + (category ? `&product_type=${category}` : '')
      + (brand ? `&make=${brand}` : '');

    await this.page.goto(url);

    expect(await this.page.locator('.search-overview__title').waitFor())

    // for demo purposes wait for visualization in UI mode
    await this.page.waitForTimeout(10000);

    if (debug) {
      console.log(`Navigated to URL: ${url}`);
    }
  }
}