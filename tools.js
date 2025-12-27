//disrupting the loop-break and continue
    //break statement
for (let i =0; i<10; i++){
    if (i==5){
        break;
    }
    console.log(i);
}

//continue statement
let shoppingList=['milk', 'bread', 'eggs', 'butter', 'cheese'];
for(let i =0; i<shoppingList.length; i++){
    if (shoppingList[i]==='eggs'){
        continue;
    }
    console.log(shoppingList[i]);
}

let i = 0;
while(true){
    i++;
    if(i >=10){
        break;
    }
    console.log(i);
}