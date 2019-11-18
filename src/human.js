import { toPlanetTime } from './toPlanetTime.js';

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
    this.ageInDays = Math.floor( (today.getTime() - birthday.getTime())/(1000*60*60*24) );
    this.age = Math.floor(this.ageInDays/365);
    return this.ageInDays;
  }

  planetAge(planet) {
    return toPlanetTime(planet, this.ageInDays);
  }

  yearsLeft(planet) {
    const genders = {male: 76.4, female: 81.2, other: 78.8};
    const statuses = {lower: -5, middle: 0, upper: 5};
    const yearsLeft = genders[this.gender] - this.age + statuses[this.ses];
    const planetYearsLeft = toPlanetTime(planet, 365.25*yearsLeft);

    const returnString = `${Math.abs(planetYearsLeft)} ${planet} years`;
    if (planetYearsLeft < 0) return ('surpassed by ' + returnString);
    return returnString;
  }
}
