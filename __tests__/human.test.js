import { Human } from './../src/human.js';

describe('Human', () => {

  let reusableHuman;
  beforeEach(() => {
    reusableHuman = new Human(22, 'M', 'Middle');
  });

  test('should correctly create a Human object that stores age in years and days', () => {
    expect(reusableHuman.age).toEqual(22);
    expect(reusableHuman.ageInDays).toEqual(8035);
    expect(reusableHuman.gender).toEqual('M');
    expect(reusableHuman.ses).toEqual('Middle');
  });

  test('.setPreciseAge() should precisely re-set and return age in days based on birthday and current date', () => {
    expect(reusableHuman.setPreciseAge(7, 25, 1997)).toEqual(8148); //this test will fail when tried from future dates (passed Nov. 15, 2019)
  });

  //all remaining tests simply use (22 years) and should always pass
  test('.getPlanetTime("Mercury") should return age in Mercury years', () => {
    expect(reusableHuman.getPlanetTime('Mercury')).toEqual(91.31);
  });
  test('.getPlanetTime("Venus") should return age in Venus years', () => {
    expect(reusableHuman.getPlanetTime('Venus')).toEqual(35.71);
  });
  test('.getPlanetTime("Mars") should return age in Mars years', () => {
    expect(reusableHuman.getPlanetTime('Mars')).toEqual(11.70);
  });
  test('.getPlanetTime("Jupiter") should return age in Jupiter years', () => {
    expect(reusableHuman.getPlanetTime('Jupiter')).toEqual(1.85);
  });
  test('.getPlanetTime("Saturn") should return age in Saturn years', () => {
    expect(reusableHuman.getPlanetTime('Saturn')).toEqual(0.75);
  });
  test('.getPlanetTime("Uranus") should return age in Uranus years', () => {
    expect(reusableHuman.getPlanetTime('Uranus')).toEqual(0.26);
  });
  test('.getPlanetTime("Neptune") should return age in Neptune years', () => {
    expect(reusableHuman.getPlanetTime('Neptune')).toEqual(0.13);
  });

  test('.yearsLeft(planet) should return either number of years left to live on a planet or number of years exceeding predictions', () => {
    expect(reusableHuman.yearsLeft('Earth')).toEqual('54.40 Earth years left');
  });
});
