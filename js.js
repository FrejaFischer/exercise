//øvelse 1 Ternary operator
const age = 45;
const email = "jofh@kea.dk";

//1.1
let isEven;
if (age % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}

let isEvenNumb = age % 2 === 0 ? "is even" : "is not even";

console.log(isEvenNumb);

//1.2
let role = "visitor";
if (email === "jofh@kea.dk") {
  if (age > 40) {
    role = "admin";
  }
}

let isAdmin = email === "jofh@kea.dk" && age > 40 ? "isAdmin" : "isVisitor";

console.log(isAdmin);

//Øvelse 2 Make arrow functions
//2.1
function setTitle(title) {
  document.title = title;
}
const setTitle2 = (title) => {
  document.title = title;
};

//2.2
function isEven2(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}
const isItEven = (number) => number % 2 === 0;
const mightBeEven = isItEven(23); //false

//2.3
function getRandBetween1and10() {
  return Math.floor(Math.random() * 10) + 1;
}

const getRandomBetween1and10 = () => Math.floor(Math.random() * 10) + 1;

//Øvelse 3 Make arrow functions
const movies = [
  {
    name: "Hard Boiled",
    genre: "Hong Kong Action",
  },
  {
    name: "LOTR",
    genre: "Fantasy",
  },
];

function showMovie(movie) {
  console.log(`The movie ${movie.name} is a typical ${movie.genre} movie`);
}

const showMovie2 = (movie) => console.log(`The movie ${movie.name} is a typical ${movie.genre} movie`);

movies.forEach(showMovie2);

//Øvelse 4 Use map instead of forEach
const searchengines = [
  { target: "https://google.com", name: "Google" },
  { target: "https://bing.com", name: "Bing" },
];
let links = [];
searchengines.forEach((link) => {
  links.push(`<a href="${link.target}">${link.name}</a>`);
});

const newArr = searchengines.map((link) => `<a href="${link.target}">${link.name}</a>`);

console.log(newArr);
