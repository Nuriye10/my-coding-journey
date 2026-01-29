//encapsulation

class Car {
  constructor(brand, year){
   this.brand=brand;
   this.year = year;
  }
  set year(newYear){
   let date= new Date();
   if(newYear>date.getFullYear()){
      this._year =date.getFullYear();
   }
   else{
      this._year =newYear
   }
  }

 get year(){
   return this._year;
 }
 age(){
   let date=new Date();
   return date.getFullYear() - this.year;
 }
}a


let newCar = new Car("citron", 2022);
console.log(newCar.year);//
console.log(newCar._year)//
newCar._year = 2250;//
console.log(newCar.year);//
console.log(newCar._year)//