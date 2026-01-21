// // Encapsulation

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year; // This will use the setter
//   }
//   set year(newYear) {
//     const date = new Date();
//     if (newYear > date.getFullYear()) {
//       this._year = date.getFullYear();
//     } else {
//       this._year = newYear;
//     }
//   }
//   get year() {
//     return this._year;
//   }
//   age() {
//     const date = new Date();
//     return date.getFullYear() - this._year;
//   }
// }

// let myCar = new Car("Ford", 2025);
// console.log(myCar.year);      // Uses getter
// console.log(myCar._year);     // Direct access (not recommended)
// myCar._year = 2020;           // Directly setting _year (bypasses setter)
// console.log(myCar.year);      // Uses getter
// console.log(myCar.age());     // Uses age method

  
class Cakes{
  constructor(name, flavour, price){
  this._name= name;
  this.flavour= flavour;
  this.price= price;

  }
  getCakes(){
    return `The cake is called ${this.name},its flavor is ${this.flavour} and it costs ${this.price}`;
  }

get name() {
  return this._name;
}
set name(newName){
  if(typeof newName === 'string'){
    this._name=newName;
  }else{
    console.log('Invalid name');
  }
}
}
let vanillaCake = new Cakes('Vanilla Pink','creamy vanilla',20);
console.log(vanillaCake.getCakes());