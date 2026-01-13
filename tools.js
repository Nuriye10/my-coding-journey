//classes

// class ClassName {
//     constructor(){}
//     method_1(){}
//     method_2(){}
//     method_3(){}   
// }

//How to create a simple class : 

// class cake {
//   constructor (flavour, color, shape){
//     this.flavour = flavour;
//     this.color = color;
//     this.shape = shape;
//   }

//   form() {
//     let currentForm = new Form();
//     return currentForm.shape();
//   }
// }
// let newCake = new cake("chocolate", "brown", "circule");
// console.log(newCake.flavour);//chocolate
// console.log(newCake.color);//brown
// console.log(newCake.shape);//
  

class house {
    constructor(rooms, year, type) {
        this.room = rooms;
        this.year = year;
        this.type = type;
    }

    floor() {
        // Placeholder logic, as 'type' is a string, not a class
        return this.type;
    }
}

let newHouse = new house(5, 2024, "villa");
console.log(newHouse.room); //5
console.log(newHouse.year); //2024
console.log(newHouse.type); //villa
//console.log(newHouse.floor()); //villa




class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal('Dog');
dog.speak(); // Output: Dog makes a sound.