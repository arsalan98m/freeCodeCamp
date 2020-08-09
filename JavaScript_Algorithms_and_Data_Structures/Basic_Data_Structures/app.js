// **** Use an Array to Store a Collection of Data **** //

// The below is an example of the simplest implementation of an array data structure.
// This is known as a one-dimensional array, meaning it only has one level, or that
// it does not have any other arrays nested within it. Notice it contains booleans,
// strings, and numbers, among other valid JavaScript data types:

/*
let simpleArray = ["one", 2, "three", true, false, undefined, null];
console.log(simpleArray.length);
// logs 7
*/

// **** Access an Array's Contents Using Bracket Notation **** //

// The fundamental feature of any data structure is, of course, the ability to
// not only store data, but to be able to retrieve that data on command. So, now
// that we've learned how to create an array, let's begin to think about how we
// can access that array's information.

// When we define a simple array as seen below, there are 3 items in it:

/*
let ourArray = ["a", "b", "c"];

// In addition to accessing the value associated with an index, you can also set an index to a value using the same notation:

ourArray[1] = "not b anymore";
// ourArray now equals ["a", "not b anymore", "c"];
*/

// **** Add Items to an Array with push() and unshift() **** //

// An array's length, like the data types it can contain, is not fixed.
// Arrays can be defined with a length of any number of elements, and
// elements can be added or removed over time; in other words, arrays are mutable.
// In this challenge, we will look at two methods with which we can programmatically
// modify an array: Array.push() and Array.unshift().

// Both methods take one or more elements as parameters and add those elements
// to the array the method is being called on; the push() method adds elements
// to the end of an array, and unshift() adds elements to the beginning.
// Consider the following:

/*
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.

*/

// **** Remove Items from an Array with pop() and shift() **** //

// Both push() and unshift() have corresponding methods that are nearly functional opposites:
// pop() and shift(). As you may have guessed by now, instead of adding, pop() removes an element
// from the end of an array, while shift() removes an element from the beginning. The key difference
// between pop() and shift() and their cousins push() and unshift(), is that neither method
// takes parameters, and each only allows an array to be modified by a single element at a time.

// Let's take a look:

/*
let greetings = ["whats up?", "hello", "see ya!"];

greetings.pop();
// now equals ['whats up?', 'hello']

greetings.shift();
// now equals ['hello']

// We can also return the value of the removed element with either method like this:

let popped = greetings.pop();
// returns 'hello'
// greetings now equals []
*/

// **** Remove Items Using splice() **** //

// Ok, so we've learned how to remove elements from the beginning and end of arrays
// using shift() and pop(), but what if we want to remove an element from somewhere
// in the middle? Or remove more than one element at once? Well, that's where splice()
// comes in. splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.

// splice() can take up to 3 parameters, but for now, we'll focus on just the
// first 2. The first two parameters of splice() are integers which represent
// indexes, or positions, of the array that splice() is being called upon.
// And remember, arrays are zero-indexed, so to indicate the first element of an
// array, we would use 0. splice()'s first parameter represents the index on
// the array from which to begin removing elements, while the second parameter
// indicates the number of elements to delete. For example:

/*
let array = ["today", "was", "not", "so", "great"];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']

// splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

let array = ["I", "am", "feeling", "really", "happy"];

let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']
*/

// **** Add Items Using splice() **** //

// Remember in the last challenge we mentioned that splice() can take up to three
// parameters? Well, you can use the third parameter, comprised of one or more
// element(s), to add to the array. This can be incredibly useful for quickly
// switching out an element, or a set of elements, for another.

/*
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);
// returns [ 10, 11, 12, 13, 14, 15 ]
*/

// **** Copy Array Items Using slice() **** //

// The next method we will cover is slice(). Rather than modifying an array,
// slice() copies or extracts a given number of elements to a new array,
// leaving the array it is called upon untouched. slice() takes only 2
// parameters — the first is the index at which to begin extraction, and
// the second is the index at which to stop extraction (extraction will
// occur up to, but not including the element at this index). Consider this:

/*
let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
*/

// **** Copy an Array with the Spread Operator **** //

// While slice() allows us to be selective about what elements of an array to
// copy, among several other useful tasks, ES6's new spread operator allows us
// to easily copy all of an array's elements, in order, with a simple and highly
// readable syntax. The spread syntax simply looks like this: ...

// In practice, we can use the spread operator to copy an array like so:

/*
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray
*/

// **** Combine Arrays with the Spread Operator **** //

// Another huge advantage of the spread operator, is the ability to combine
// arrays, or to insert all the elements of one array into another, at any index.
// With more traditional syntaxes, we can concatenate arrays, but this only allows
// us to combine arrays at the end of one, and at the start of another.
// Spread syntax makes the following operation extremely simple:

/*
let thisArray = ["sage", "rosemary", "parsley", "thyme"];

let thatArray = ["basil", "cilantro", ...thisArray, "coriander"];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']


*/

// **** Check For The Presence of an Element With indexOf() **** //

// Since arrays can be changed, or mutated, at any time, there's no guarantee
// about where a particular piece of data will be on a given array, or if that
// element even still exists. Luckily, JavaScript provides us with another
// built-in method, indexOf(), that allows us to quickly and easily check for the
// presence of an element on an array. indexOf() takes an element as a parameter,
// and when called, it returns the position, or index, of that element,
// or -1 if the element does not exist on the array.

// for example:

/*
let fruits = ["apples", "pears", "oranges", "peaches", "pears"];

fruits.indexOf("dates"); // returns -1
fruits.indexOf("oranges"); // returns 2
fruits.indexOf("pears"); // returns 1, the first index at which the element exists
*/

// **** Add Key-Value Pairs to JavaScript Objects **** //

// At their most basic, objects are just collections of key-value pairs. In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys). Take a look at an example:

/*
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

// updating food object
// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Only change code above this line

console.log(foods);
*/

// **** Modify an Object Nested Within an Object **** //

// Now let's take a look at a slightly more complex object. Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, including arrays and even other objects. Consider the following:

/*
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);
*/

// **** Use the delete Keyword to Remove Object Properties **** //

/*
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line

console.log(foods);
*/

// **** Check if an Object has a Property **** //

// Now we can add, modify, and remove keys from objects. But what if we just
// wanted to know if an object has a specific property? JavaScript provides
// us with two different ways to do this. One uses the hasOwnProperty() method
// and the other uses the in keyword. If we have an object users with a property
// of Alan, we could check for its presence in either of the following ways:

/*
users.hasOwnProperty("Alan");
"Alan" in users;
// both return true
*/

// **** Iterate Through the Keys of an Object with a for...in Statement **** //

// Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a for...in statement. For our users object, this could look like:

/*
for (let user in users) {
  console.log(user);
}

// logs:
Alan
Jeff
Sarah
Ryan*/
