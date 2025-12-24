

   

// const numbers =[1,2,3,4,5,6];
// const even =numbers.filter(isEven);
// console.log(numbers);
// console.log(even);
// function isEven(value){
//     return value % 2 == 0;
// }

// const numbers= [1,2,3,4,5,6];
// const sum = numbers .reduce ((total, value)=> total + value);
// console.log(numbers);
// console.log(sum);

const colors = [];
const color1 = prompt("enter your first favourite color");
const color2 =prompt("enter your second favourite color");
const color3= prompt("enter your third favourite color");

colors.push(color1, color2, color3);

const upperCaseColors = colors.map(function(color){
    return color.toUpperCase();
});
console.log("Colors in capital letters:");
console.log(upperCaseColors[0]);
console.log(upperCaseColors[1]);
console.log(upperCaseColors[2]);