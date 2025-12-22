// Other array methods 
//split(), concat(),

const message ="Please, help me to cancel my order!";
const words=message.split(" ");
console.log(words);

const information =" Albert Einstein, physicist, born 1879, died 1955.";
const data=information.split(" ,");

console.log(data);

const cities = ["Oslo", "Moss", "Bergen",];
const cities2=["Trondheim", "Stavanger"];
const cities3=["Hamar", "Drammen"];
const finalCities= cities.concat(cities2,cities3    );
console.log(finalCities);
const movie =["kongfu panda"];
const movies =["Avatar", "gameof thrones"];
const moreMovies = ["Inception", "The Matrix"];
//const allMovies = movie.concat(movies, moreMovies);
const allMovies=[...movie,...movies,...moreMovies];
console.log(allMovies);