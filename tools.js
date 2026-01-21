// Encapsulation

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year; // This will use the setter
  }
  set year(newYear) {
    const date = new Date();
    if (newYear > date.getFullYear()) {
      this._year = date.getFullYear();
    } else {
      this._year = newYear;
    }
  }
  get year() {
    return this._year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this._year;
  }
}

let myCar = new Car("Ford", 2025);
console.log(myCar.year);      // Uses getter
console.log(myCar._year);     // Direct access (not recommended)
myCar._year = 2020;           // Directly setting _year (bypasses setter)
console.log(myCar.year);      // Uses getter
console.log(myCar.age());     // Uses age method

  

