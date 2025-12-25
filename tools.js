//the for-in loop

const numbers =[1,2,3,4,5,6];
for (index in numbers){
    console.log(numbers[index]);
}

let text = "some pretty long string";
for ( index in text ){
    console.log(text.charAt(index));
}
  
let message = "Please take your seats.";
for (index in message){
    console.log(message.charAt(index));
}