import { test } from '../fixtures/reverbFixture';

test.describe('Reverb URL Builder Tests', () => {
  test('Fender Electric Pianos made before 1976', async ({ reverb }) => {
    await reverb.buildUrl({ yearMax: 1975, category: "keyboards-and-synths", brand: "fender" });
  });

  test('Gibson Basses made between 89 and 08', async ({ reverb }) => {
    await reverb.buildUrl({ yearMin: 1989, yearMax: 2008, category: "bass-guitars", brand: "gibson" });
  });

  test('Vintage Moogs', async ({ reverb }) => {
    await reverb.buildUrl({ yearMax: 1989, category: "keyboards-and-synths", brand: "moog" });
  });

  test('Gibson Guitars made 1989 or earlier', async ({ reverb }) => {
    await reverb.buildUrl({ yearMax: 1989, category: "electric-guitars", brand: "gibson" });
  });

  test('Yamaha Guitars made 1989 or earlier', async ({ reverb }) => {
    await reverb.buildUrl({ yearMax: 1989, category: "electric-guitars", brand: "yamaha" });
  });

  test('Roland Synths made between 80 and 95', async ({ reverb }) => {
    await reverb.buildUrl({ yearMin: 1980, yearMax: 1995, category: "keyboards-and-synths", brand: "roland", debug: true });
  });

  test('Korg Synths made 1978 or earlier', async ({ reverb }) => {
    await reverb.buildUrl({ yearMax: 1978, category: "keyboards-and-synths", brand: "korg" });
  });
});
