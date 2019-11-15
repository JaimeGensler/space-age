export class Human {
  constructor(age) {
    this.age = age;
    this.ageInDays = Math.floor(age*365.25);
  }

  setPreciseAge(month, day, year) {
    const birthday = new Date(year, month-1, day);
    const today = new Date();
    this.ageInDays = Math.floor((today.getTime() - birthday.getTime())/(1000*60*60*24));
    this.age = Math.floor(this.ageInDays/365);
    return this.ageInDays;
  }

  getPlanetAge(planet) {
    switch (planet) {
      case 'Mercury':
        return (this.ageInDays/88).toFixed(2);
      case 'Venus':
        return (this.ageInDays/225).toFixed(2);
      case 'Mars':
        return (this.ageInDays/687).toFixed(2);
    }
  }
}
