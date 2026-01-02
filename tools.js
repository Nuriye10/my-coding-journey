//classes

// class ClassName {
//     constructor(){}
//     method_1(){}
//     method_2(){}
//     method_3(){}   
// }

//How to create a simple class : 

class cake {
  constructor (flavour, color, shape){
    this.flavour = flavour;
    this.color = color;
    this.shape = shape;
  }

  form() {
    let currentForm = new Form();
    return currentForm.shape();
  }
}
let newCake = new cake("chocolate", "brown", "circule");
console.log(newCake.flavour);//chocolate
console.log(newCake.color);//brown
console.log(newCake.shape);//
  