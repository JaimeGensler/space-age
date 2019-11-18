import { Human } from './../src/human.js';

describe('Human', () => {

  let reusableHuman;
  beforeEach(() => {
    reusableHuman = new Human(22, 'male', 'middle');
  });

  test('should correctly create a Human object that stores age in years and days', () => {
    expect(reusableHuman.age).toEqual(22);
    expect(reusableHuman.ageInDays).toEqual(8035);
    expect(reusableHuman.gender).toEqual('male');
    expect(reusableHuman.ses).toEqual('middle');
  });

  test('.setPreciseAge() should precisely re-set and return age in days based on birthday and current date', () => {
    expect(reusableHuman.setPreciseAge(7, 25, 1997)).toEqual(8150); //this test will fail when tried from future dates (passed Nov. 17, 2019)
  });

  //all remaining tests simply use (22 years) and should always pass
  test('.planetAge("Mercury") should return age in Mercury years', () => {
    expect(reusableHuman.planetAge('Mercury')).toEqual(91.31);
  });
  test('.planetAge("Venus") should return age in Venus years', () => {
    expect(reusableHuman.planetAge('Venus')).toEqual(35.71);
  });
  test('.planetAge("Mars") should return age in Mars years', () => {
    expect(reusableHuman.planetAge('Mars')).toEqual(11.70);
  });
  test('.planetAge("Jupiter") should return age in Jupiter years', () => {
    expect(reusableHuman.planetAge('Jupiter')).toEqual(1.85);
  });
  test('.planetAge("Saturn") should return age in Saturn years', () => {
    expect(reusableHuman.planetAge('Saturn')).toEqual(0.75);
  });
  test('.planetAge("Uranus") should return age in Uranus years', () => {
    expect(reusableHuman.planetAge('Uranus')).toEqual(0.26);
  });
  test('.planetAge("Neptune") should return age in Neptune years', () => {
    expect(reusableHuman.planetAge('Neptune')).toEqual(0.13);
  });

  test('.yearsLeft(planet) should return either number of years left to live on a planet or number of years exceeding predictions', () => {
    const freshHuman = new Human(99, 'female', 'upper');
    expect(reusableHuman.yearsLeft('Earth')).toEqual('54.44 Earth years');
    expect(reusableHuman.yearsLeft('Mars')).toEqual('28.92 Mars years');
    expect(freshHuman.yearsLeft('Mercury')).toEqual('surpassed by 53.13 Mercury years');
  });
});
