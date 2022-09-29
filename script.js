"use strict";

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

/* This prints the elements and the index .entries of an array */

// for(const [i, player] of game.scored.entries())
//   console.log(i, player);

// const {odds: {team1, x: draw, team2}} = game;

// for(const [team, odd] of Object.entries(game.odds)){
//   console.log(`Odd of ${game[team] ? 'victory ' : ''}${game[team] ?? 'Draw'} ${odd}`);
// }

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/* Without optional chaining */
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

/* Optional chaining
 * Checks if mon exist and if so then go to open
 */
console.log(restaurant.openingHours.mon?.open);

for (const day of weekdays) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day} we open at ${open}`);
}

/* If the method does not exist it return nullish value
 *  and its evaluated with the nullish operator
 * Remember this is optional so it needs an argument after declaration
 */
console.log(restaurant.orderRissotto?.(0, 1) ?? "Method does not exist!");

/* Properties are the names, values the name values and entries the whole thing */
const properties = Object.keys(openingHours);
const values = Object.values(openingHours);
const entries = Object.entries(openingHours);
console.log(properties);
console.log(values);
console.log(entries);

/* Looping throught objects arrays */
for (const day of properties) {
  console.log(day);
}

/* Using destructuring we can select directly the keys and values, the values is an object so that's why its deconstructed that way [key, value] */
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/* Now lets talk about sets */
/* What they do is not having repeated elements */
const orderSet = new Set(["Pizza", "Pizza", "Pizza"]);

console.log(orderSet.has("Pizza")); //

orderSet.add("Risotto");
orderSet.delete("Pizza");

/* There is no way to get data out of a set, and the values can not be indexed */

// orderSet.delete[1] This does not work

console.log(orderSet);

/* Maps (like a diccionary) */

const rest = new Map();
console.log(rest.set("name", "Matew")); // It returns the map

console.log(rest.get("name")); // Get element

/* delete adn has methods also work for maps with the key */

// Maps iterations (better way to create a map)
const questions = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "correct!!!"],
  [false, "try again"],
]);

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(questions.get("question"));
for (const [key, value] of questions) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer: '));

// console.log(questions.get(answer === questions.get('correct')));

/* To transform maps or sets back to arrays the deconstructing methods is the easiest and fastest way */

const gameEvents = new Map([
  [17, " GOAL"],
  [36, " Substitution"],
  [47, " GOAL"],
  [61, " Substitution"],
  [64, " Yellow card"],
  [69, " Red card"],
  [70, " Substitution"],
  [72, " Substitution"],
  [76, " GOAL"],
  [80, " GOAL"],
  [92, " Yellow card"],
]);



const gameEventsUnique = new Set([...gameEvents.values()]);
console.log(gameEventsUnique);

gameEvents.delete(64);
console.log(gameEvents);

console.log(`An event happened every ${90/gameEvents.size} minutes`);

// for(const [key, value] of gameEvents){
//   console.log(`${key < 45 ?'[FIRST HALF]' : '[SECOND HALF]'} ${value}`);
// }

for(const [min, event] of gameEvents){
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

/* Strings */

const airline = 'Avianca Star Alliance Member';
const plane = 'A320';

console.log(airline.indexOf('A')); // 0
console.log(airline.lastIndexOf('A')); // 13
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Member
console.log(plane.slice(-1)); // 0

const checkSeat = (seat) => {
  if(seat.slice(-1) === 'B')
    console.log('You got the middle seat.');
  else 
    console.log('You got lucky!');
}

checkSeat('12B'); // True

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'JoNaS';
