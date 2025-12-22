// Other array methods 
//split(), concat(), splice(), slice(),

const numbers =[1,2,3,4,5,6];
const newNumbers = numbers.slice(1,3);
console.log(numbers);
console.log(newNumbers);

const  number1= [1,2,3,4,5,6,7,8];
const number2= number1.slice(1,5);
console.log(number1);
console.log(number2);

const number3= [1,2,3,4,5,6,7,8];
const newnumber =number3.slice(-4,-1); 
console.log(number3);
console.log(newnumber);

const number4 = [1,2,3,4,5,6,7,8];
number4.splice(2, 4, 9, );
console.log(number4);