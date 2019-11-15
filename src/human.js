export class Human {
  constructor(age, gender, ses) {
    this.age = age;
    this.ageInDays = Math.floor(age*365.25);
    this.gender = gender;
    this.ses = ses;
  }

  setPreciseAge(month, day, year) {
    const birthday = new Date(year, month-1, day);
    const today = new Date();
    this.ageInDays = Math.floor((today.getTime() - birthday.getTime())/(1000*60*60*24));
    this.age = Math.floor(this.ageInDays/365);
    return this.ageInDays;
  }

  getPlanetTime(planet, days) {
    if (days === undefined) days = this.ageInDays;

    const planets = {
      Mercury: 88,
      Venus: 225,
      Earth: 365,
      Mars: 687,
      Jupiter: 4332,
      Saturn: 10759,
      Uranus: 30688,
      Neptune: 60200
    }
    return Math.round( (days/planets[planet])*100 )/100;
  }

  yearsLeft(planet) {
    const genders = {M: 76.4, F: 81.2, O: 78.8};
    let expectedAge = genders[this.gender];
    if (this.ses = 'Upper') expectedAge += 5;
    if (this.ses = 'Lower') expectedAge -= 5;

    const yearsLeft = (expectedAge - this.age).toFixed(2); //can't manipulate a string (below)
    if (yearsLeft < 0) return (`surpassed life expectancy by ${-1 * yearsLeft} years'`);
    return (`${yearsLeft} Earth years left`);
  }
}
