class FlowerName {
	constructor(name, color, season) {
		this.name = name;
		this.color = color;
		this.season = season;
	}
	getSeason() {
		return this.season;
	}
}

let flower = new FlowerName("Rose", "White", "Spring");
console.log(flower.name);      // Output: Rose
console.log(flower.color);     // Output: White
console.log(flower.getSeason()); // Output: Spring

class Student{
  constructor(name, surname, age){
    this.name=name;
    this.surname=surname;
    this.age=age;
  }
  getGreetings(){
    return `Hello, my name is ${this.name} ${this.surname} and I am ${this.age} years old,`;
  }

getBirthYear(){
  return new Date().getFullYear() - this.age;
}
}

let student1 = new Student("Nuriye","Kader", 38);
console.log(student1.getGreetings());
console.log("Birth Year: " + student1.getBirthYear());

