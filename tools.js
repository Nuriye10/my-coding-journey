//classes

// class ClassName {
//     constructor(){}
//     method_1(){}
//     method_2(){}
//     method_3(){}   
// }


class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
    age() {
        let currentDate = new Date();
        return currentDate.getFullYear() - this.publicationYear;
    }
