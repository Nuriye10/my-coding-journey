// class FlowerName {
// 	constructor(name, color, season) {
// 		this.name = name;
// 		this.color = color;
// 		this.season = season;
// 	}
// 	getSeason() {
// 		return this.season;
// 	}
// }

// let flower = new FlowerName("Rose", "White", "Spring");
// console.log(flower.name);      // Output: Rose
// console.log(flower.color);     // Output: White
// console.log(flower.getSeason()); // Output: Spring

// class Student{
//   constructor(name, surname, age){
//     this.name=name;
//     this.surname=surname;
//     this.age=age;
//   }
//   getGreetings(){
//     return `Hello, my name is ${this.name} ${this.surname} and I am ${this.age} years old,`;
//   }

// getBirthYear(){
//   return new Date().getFullYear() - this.age;
// }
// }

// let student1 = new Student("Nuriye","Kader", 38);
// console.log(student1.getGreetings());
// console.log("Birth Year: " + student1.getBirthYear());



class Student {
  constructor (name, surname, age){
    this.name = name;
    this.surname=surname;
    this.age = age;
  }
  greetings(){
    return `Hello my name is ${this.name} ${this.surname}.`;
  }
    birthYear() {
    let date =new Date();
    return date.getFullYear() -this.age;
  }
    }  
  const student1 = new Student("Nuriye", "Kader", 38);
  const student2 = new Student ("John", "Doe", 29);
  const student3 = new Student ("Jane", "Smith", 36);
  console.log(student1.greetings());
  console.log(student1.birthYear());
  console.log(student2.greetings());
  console.log(student2.birthYear());
  console.log(student3.greetings());
  console.log(student3.birthYear());

  
  

