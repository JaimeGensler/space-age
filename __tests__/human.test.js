import { Human } from './../src/human.js';

describe('Human', () => {

  let reusableHuman;
  beforeEach(() => {
    reusableHuman = new Human(22);
  });

  test('should correctly create a Human object that stores age in years and days', () => {
    expect(reusableHuman.age).toEqual(22);
    expect(reusableHuman.ageInDays).toEqual(8035);
  });

  test('.setPreciseAge() should precisely re-set and return age in days based on birthday and current date', () => {
    expect(reusableHuman.setPreciseAge(7, 25, 1997)).toEqual(8148); //this test will fail when tried from future dates (passed Nov. 15, 2019)
  });

  //all remaining tests simply use (22 years) and should always pass
  test('.getPlanetAge("Mercury") should return age in Mercury years', () => {
    expect(reusableHuman.getPlanetAge('Mercury')).toEqual('91.31');
  });
  test('.getPlanetAge("Venus") should return age in Venus years', () => {
    expect(reusableHuman.getPlanetAge('Venus')).toEqual('35.71');
  });
  test('.getPlanetAge("Mars") should return age in Mars years', () => {
    expect(reusableHuman.getPlanetAge('Mars')).toEqual('11.70');
  });
  test('.getPlanetAge("Jupiter") should return age in Jupiter years', () => {
    expect(reusableHuman.getPlanetAge('Jupiter')).toEqual('1.85');
  });
});
