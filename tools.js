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

  
// class Cakes{
//   constructor(name, flavour, price){
//   this._name= name;
//   this.flavour= flavour;
//   this.price= price;

//   }
//   getCakes(){
//     return `The cake is called ${this.name},its flavor is ${this.flavour} and it costs ${this.price}`;
//   }

// get name() {
//   return this._name;
// }
// set name(newName){
//   if(typeof newName === 'string'){
//     this._name=newName;
//   }else{
//     console.log('Invalid name');
//   }
// }
// }
// let vanillaCake = new Cakes('Vanilla Pink','creamy vanilla',20);
// console.log(vanillaCake.getCakes());

// class House {
//   constructor (name){
//     this.name=name;

//   }
//    info (){
//     return 'this is a house called :' + this.name + '.';
//    }
// }
// class  Villa extends House {
//   constructor(name, price){
//     super(name);
//     this.price =price;
//   }
//   infor (){
//     return super.info() + 'It costs '+ this.price +'.';
//   }
// }
// let myVilla = new Villa('Beach House', 500000);
// let houseInfo = myVilla.infor();
// console.log(houseInfo);

// class Pizza {
//   constructor(name, price){
//     this.name=name;
//     this.price= price;
//   }
//   info( ){
//     return `I am basic pizza called ${this.name} and I cost $${this.price}`;
//   }
// }
// class SpecialPizza extends Pizza {
//   constructor(name, price, toppings) {
//     super(name, price);
//     this.toppings = toppings;
//   }
//   infor() {
//     return super.info() + ` My toppings are: ${this.toppings.join(', ')}.`;
//   }
// }
// let myPizza = new SpecialPizza('Pepperoni',15, ['Mushrooms', 'Olives', 'Extra Cheese']);
// let pizzaInfo = myPizza.infor();
// console.log(pizzaInfo);


class student{
  constructor(name, age, country){
    this.name=name;
    this.age=age;
    this.country=country;
  }
  greetings(){
    return `Hello, my name is ` + this.name+ `  `+ this .age+ `  `+ this.country+ 
    `.`;
  }

birthday (){

    let date = new Date();
    return date.getFullYear() - this.age;
  }
}
 const student1 = new student ('john', 23 ,'USA');
 const student2= new student('anna', 20, 'UK');
 const student3 = new student ('maria', 21, 'turkey');

 console.log(student1.greetings());
 console.log(student1.birthday());
 console.log(student2.greetings());
 console.log(student2.birthday());
 console.log(student3.greetings());
 console.log(student3.birthday());
