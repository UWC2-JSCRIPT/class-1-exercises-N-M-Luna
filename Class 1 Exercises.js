/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
const SMALL_PIZZA_DIAMETER = 13;
const LARGE_PIZZA_DIAMETER = 17;
const SMALL_PIZZA_PRICE = 16.99;
const LARGE_PIZZA_PRICE = 19.99;

// What is the area for each of these pizzas?
// The area of a circle is PI*r^2, where r is the radius.
// The radius would be half the listed size, e.g. 13"/2.
const smallPizzaArea = (Math.PI * Math.pow(SMALL_PIZZA_DIAMETER / 2, 2)).toFixed();
const largePizzaArea = (Math.PI * Math.pow(LARGE_PIZZA_DIAMETER / 2, 2)).toFixed();
console.log(`Problem 1.`)
console.log(`The small pizza is ${smallPizzaArea} square inches and the large pizza is ${largePizzaArea} square inches.`);

// 2. What is the cost per square inch of each pizza?
// To find the cost of a square inch of pizza, we need to divide the price by the area (in inches).
const smallPizzaCost = (SMALL_PIZZA_PRICE / smallPizzaArea).toFixed(2);
const largePizzaCost = (LARGE_PIZZA_PRICE / largePizzaArea).toFixed(2);
console.log(`Problem 2.`)
console.log(`A square inch of the small pizza costs $${smallPizzaCost} and a square inch of the large pizza costs $${largePizzaCost}.`);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
const deck = ['Ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'Jack', 'Queen', 'King'];
let card = Math.floor(Math.random() * 13); // This is a random integer in [0, 12]
console.log(`Problem 3.`)
console.log(`Pick a card. Any card.`);
console.log(`It's the ${deck[card]} of hearts. =)`);

// 4. Draw 3 cards and use Math to determine the highest card

// Draw three different cards
let card1, card2, card3
// Pick the first card
card1 = Math.floor(Math.random() * 13);
//Pick the second card and overwrite until it's different from the first
card2 = Math.floor(Math.random() * 13);
while (card1 == card2) {
  card2 = Math.floor(Math.random() * 13);
}
//Pick the third card and overwrite until it's different from the first two
card3 = Math.floor(Math.random() * 13);
while ((card3 == card1) || (card3 == card2)) {
  card3 = Math.floor(Math.random() * 13);
}

// Save the highest card
let highestCard = Math.max(card1, card2, card3)

// Answer
console.log(`Problem 4.`)
console.log(`If we pick the ${deck[card1]}, the ${deck[card2]}, and the ${deck[card3]} of whatever suit, the highest is the ${deck[highestCard]}.`);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const [firstName, lastName, streetAddress, city, state, zipCode] = [`Nathalie`, `Luna`, `314 Sugar St`, `Edinburg`, `TX`, `00728`];

const addressStamp = `${firstName} ${lastName}
  ${streetAddress}
  ${city}, ${state}
  ${zipCode}`;

console.log(`Problem 5.`)
console.log(addressStamp)

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
//
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

// Function that captures the first name
function captureFirstName(addressStamp) {
  // Find the index of the first space (between the first and the last name).
  const index = addressStamp.indexOf(' ');
  // Grab the sub-string from index 0 until just before the first space.
  const firstName = addressStamp.slice(0, index);
  // Return the string containing the first name.
  return firstName;
}

// Grab the name and print to the
const name = captureFirstName(addressStamp)
console.log(`Problem 6.`)
console.log(`The first name in the address stamp above is ${name}.`)

/**
 * FIND THE MIDDLE DATE
 */
// On your own find, the middle date (and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00

// Start and end dates
const startDate = new Date(2020, 0, 1);
const endDate = new Date(2019, 3, 1);

// Convert both dates to Nerd Time.
const startTime = Date.parse(startDate)
const endTime = Date.parse(endDate)

// To find the middle time, we first add the start and end date and then divide by two.
const middleTime = (startTime + endTime) / 2
const middleDate = new Date(middleTime)

console.log(`Problem 7.`)
console.log(`The middle date and time between
  ${startDate}
  and
  ${endDate}
  is
  ${middleDate}.`)
