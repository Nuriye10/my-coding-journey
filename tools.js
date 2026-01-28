//Encapsulation

class car {
   constructor(name,year) {
    this.name=name;
    this.year=year;
   }

} 
let mycar=new car("ford",2020);
console.log(mycar.name);  
console.log(mycar.year);