// Other array methods 
// function

const animals =["cat","dog","sheep","cow","elephant"];
const newAnimals= animals.slice(1,4);
console.log(newAnimals); //["dog","sheep","cow"]


const greetings=[prompt("enter greeting 1") ];
const greetings2=[prompt("enter greeting 2")];
const allGreetings=greetings.concat(greetings2);
console.log(allGreetings);