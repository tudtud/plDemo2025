import { test } from '../fixtures/reverbFixture';
import { Brand, Category } from '../models/reverb';

test.describe('Reverb URL Builder Tests', () => {
  test('Fender Electric Pianos made before 1976', async ({ reverb }) => {
    await reverb.buildUrl({ yearMax: 1975, category: Category.keyboardsAndSynths, brand: Brand.fender });
  });

  test('Gibson Basses made between 89 and 08', async ({ reverb }) => {
    await reverb.buildUrl({ yearMin: 1989, yearMax: 2008, category: Category.bassGuitars, brand: Brand.gibson });
  });

  test('Vintage Moogs', async ({ reverb }) => {
    await reverb.buildUrl({ yearMax: 1989, category: Category.keyboardsAndSynths, brand: Brand.moog });
  });

  test('Gibson Guitars made 1989 or earlier', async ({ reverb }) => {
    await reverb.buildUrl({ yearMax: 1989, category: Category.electricGuitars, brand: Brand.gibson });
  });

  test('Yamaha Guitars made 1989 or earlier', async ({ reverb }) => {
    await reverb.buildUrl({ yearMax: 1989, category: Category.electricGuitars, brand: Brand.yamaha });
  });

  test('Roland Synths made between 80 and 95', async ({ reverb }) => {
    await reverb.buildUrl({ yearMin: 1980, yearMax: 1995, category: Category.keyboardsAndSynths, brand: Brand.roland, debug: true });
  });

  test('Korg Synths made 1978 or earlier', async ({ reverb }) => {
    await reverb.buildUrl({ yearMax: 1978, category: Category.keyboardsAndSynths, brand: Brand.korg });
  });
});
