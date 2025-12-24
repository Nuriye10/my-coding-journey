

   

const numbers =[1,2,3,4,5,6];
const even =numbers.filter(isEven);
console.log(numbers);
console.log(even);
function isEven(value){
    return value % 2 == 0;
}