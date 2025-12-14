//Extraction of string elements

//3 useful extracting methods:slice, substring, and substr

let text = "My favourite book is \"The sea\"";

let part = text.slice(11, 19);
console.log(part);
document.writeln(part);

let text2 = "My favourite book is \"the sea\"";
let part2= text2.slice(-19, -11);
console.log(part2);
document.writeln(part2);

let text3 = "My favourie book is \"the sea\"";
let part3 =text3.slice(4);
console.log(part3);
document.writeln(part3);

let text4 = "My favourite book is \"the sea\"";
let part4 = text4.slice(-4);
console.log(part4);
document.writeln(part4);

let text5 = "My favourite book is \"the sea\"";
let part5 = text5.substr(4,5);
console.log(part5);
document.writeln(part5);