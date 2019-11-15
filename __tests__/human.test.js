import { Human } from './../src/human.js';

describe('Human', () => {

  let reusableHuman;
  beforeEach(() => {
    reusableHuman = new Human(22);
  });

  test('should correctly create a Human object that stores age in years and days', () => {
    expect(reusableHuman.age).toEqual(22);
    expect(reusableHuman.ageInDays).toEqual(8035.5);
  });

  test('.setPreciseAge() should precisely re-set and return age in days based on birthday and current date', () => {
    expect(reusableHuman.setPreciseAge(7, 25, 1997)).toEqual(8148); //this test will fail when tried from future dates (Nov. 15, 2019)
  });
});
