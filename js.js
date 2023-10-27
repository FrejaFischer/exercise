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

//Øvelse 5 Follow instructions
const names = ["Jonas", "Dannie", "Peter", "Klaus"];
/* start by making a "bad" copy of this array 
by writing something like const myBadCopy = names;
then modify either array by changing one name
then console log both, what happened
*/

// myBadCopy = names;
// myBadCopy[0] = "Freja";
// console.log(names); //Den originale er også ændret :-(

/* Then create a copy using the ... spread operator
modify either array and console log them, what happens now?
*/

myGoodCopy = [...names];
console.log(myGoodCopy); //En kopi af names
myGoodCopy[0] = "Freja";
console.log(names); //Har ikke ændret sig. Stadig Jonas.

//Øvelse 6 Follow instructions
const me = {
  name: "Jonas",
  age: 45,
  kids: 3,
};

/* start by making a bad copy (reference) with something like
const myCopy = me;
change something, see what happens */
// badCopy = me;
// badCopy.name = "Freja";
// console.log(badCopy);
// console.log(me); //Den er også blevet ændret
/*
Then make a new copy using the spead operator, 
change something and see what happens
*/
goodCopy = { ...me };
goodCopy.name = "Freja";
console.log(goodCopy);
console.log(me); //Me er ikke blevet ændret

//Øvelse 7 Se video
//Øvelse 8
/* this function receives an object with stuff it does not need
	make it easier for the next developer by destructuring out the 
	parts we need 
	Then clean up the function by removing "person.x". */

// function personCard(person) {
//   return `<div class="person">
//         <h2>${person.name}</h2>
//         <ul>
//             <li><a href="tel:+${person.phone}">Call</a></li>
//             <li><a href="mailto:${person.email}">E-mail</a></li>
//         </ul>
//     </div>`;
// }
// const myPerson = {
//   name: "Clark Kent",
//   marriage: null,
//   glasses: true,
//   phone: 911,
//   street: "secret",
//   email: "clark@dailyplanet.com",
// };
// personCard(myPerson);

function personCard({ name, phone, email }) {
  return `<div class="person">
	        <h2>${name}</h2>
	        <ul>
	            <li><a href="tel:+${phone}">Call</a></li>
	            <li><a href="mailto:${email}">E-mail</a></li>
	        </ul>
	    </div>`;
}
const myPerson = {
  name: "Clark Kent",
  marriage: null,
  glasses: true,
  phone: 911,
  street: "secret",
  email: "clark@dailyplanet.com",
};
console.log(personCard(myPerson));

//Øvelse 9 Follow instruction
/* this function return 4 random numbers in an array. Use destructuring 
	to pick out the two first items */

function getNums() {
  return [Math.random(), Math.random(), Math.random(), Math.random()];
}
//Vis den skulle blive til arrow
// const getNums2=()=>[Math.random(), Math.random(), Math.random(), Math.random()];

const [firstRan, secondRan] = getNums();

function test() {
  return [1, 2, 3, 4];
}
const [firstNum, secondNum] = test();
console.log(firstNum, secondNum);
