// //encapsulation

// class Car {

//    #_year
//    constructor(name, year ){
//     this.name =name;
//     this.year=year;

//    }
//    set year (newYear){
//       let date =new Date();
//       if(newYear > date.getFullYear()){
//          this.#_year=date.getFullYear();
//       }else{
//          this.#_year=newYear;

//       }

//    }
//    get year (){
//       return this.#_year;
//    }
//    age(){
//       let date= new Date();
//       return date.getFullYear() -this.#_year;
//    }

// }
// let newCar =new Car("Nissan", 2220);//
// console.log(newCar.year);
// console.log(newCar.age());




class Person {
  constructor(name, age) {
    let _age = age; // private variable

    this.name = name;

    this.getAge = function() {
      return _age;
    };

    this.setAge = function(newAge) {
      if (newAge > 0) {
        _age = newAge;
      }
    };
  }
}

const person = new Person("Alice", 25);
console.log(person.name);      // Alice
console.log(person.getAge());  // 25
person.setAge(30);
console.log(person.getAge());  // 30