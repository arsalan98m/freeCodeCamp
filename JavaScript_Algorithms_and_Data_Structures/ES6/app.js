// **** ES6: Explore Differences Between the var and let Keywords ****

// One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error.

/*
var camper = "James";
var camper = "David";
console.log(camper); // logs 'David'
*/

/*
let camper = "James";
let camper = "David"; // throw an error
*/

/*
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
  console.log(catName);
  console.log(quote);
}
catTalk();
*/

// **** ES6: Compare Scopes of the var and let Keywords ****

// for example

/*
var numArray = [];

for (var i = 0; i < 3; i++) {
  numArray.push(i);
}

console.log(numArray); // return [0, 1, 2]

console.log(i); // i = 3;
*/

// With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable.

// This code is similar to the following:

/*
var numArray = [];
var i;
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}

console.log(numArray); // return [0, 1, 2]

console.log(i); // i = 3;
*/

// This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable. This is because the stored function will always refer to the value of the updated global i variable.

/*
var printNumTwo;

for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}


console.log(printNumTwo()); // returns 3
*/

// As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned to i was updated and the printNumTwo() returns the global i and not the value i had when the function was created in the for loop. The let keyword does not follow this behavior:

/*
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}

console.log(printNumTwo()); // returns 2

console.log(i); // return i is not defined
*/

// i is not defined because it was not declared in the global scope. It is only declared within the for loop statement. printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created by the let keyword within the loop statement.

/*
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo()); // returns 2

console.log(i); // i is not defined
*/

/*
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }

  console.log("Function scope i is: ", i);

  return i;
}

returnI = checkScope();
console.log(returnI);
*/

// **** ES6: Declare a Read-Only Variable with the const Keyword ****

/*
The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.

const has all the awesome features that let has, with the added bonus that 
variables declared using const are read-only. They are a constant value,
which means that once a variable is assigned with const,
it cannot be reassigned.
*/

// const FAV_PET = "CATS";
// FAV_PET = "DOGS"; // return error

/*
function printManyTimes(str) {
  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (var i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }

  // Only change code above this line
}
printManyTimes("pfreeCodeCam");
*/

// **** ES6: Mutate an Array Declared with const ****

// However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

/*
const s = [5, 6, 7];
// s = [1, 2, 3]; // throws an error, trying to assign a const
s[2] = 45;
console.log(s); // returns [5, 6, 45]

// As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator.

const a = [5, 7, 2];
function editInPlace() {
  "use strict";
  // Only change code below this line
  a[0] = 2;
  a[1] = 5;
  a[2] = 7;

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
*/

// **** ES6: Prevent Object Mutation **** //

// As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.

// Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.

/*
let obj = {
  name: "Freecodecamp",
  review: "Awesome",
};

Object.freeze(obj);

obj.review = "bad"; // will be ignores. Mutation not allowed
obj.review = "Test"; // will be ignores. Mutation not allowed

console.log(obj); // return {name: "Freecodecamp", review: "Awesome"}

*/

/*
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line

  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
*/

// **** ES6: Use Arrow Functions to Write Concise Anonymous Functions **** //

// In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

// To achieve this, we often use the following syntax:

/*
const myFunc = function () {
  const myVar = "value";
  return myVar;
};
*/

// ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

/*
const myFunc = () => {
  const myVar = "value";
  return myVar;
};

*/

// When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

/*
const myFunc = () => "value";
console.log(myFunc());

const magic = () => new Date();
console.log(magic());
*/

// **** ES6: Write Arrow Functions with Parameters **** //

// Just like regular function, you can pass arguments into an arrow function.

// doubles input value and returns it

/*
const doubler = (item) => item * 2;
console.log(doubler(2));
*/

// If an arrow function has a single argument, the parentheses enclosing the argument may be omitted.

// the same function, without the argument parentheses

/*
const doubler = (item) => item * 2;
console.log(doubler(3));
*/

// It is possible to pass more than one argument into an arrow function.

/*
const multiplier = (item, multi) => item * multi;
console.log(multiplier(2, 10));
*/

/*
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));
*/

// **** ES6: Set Default Parameters for Your Functions **** //
// In order to help us create more flexible functions, ES6 introduces default parameters for functions.

/*
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
*/

// **** ES6: Use the Rest Parameter with Function Parameters **** //

// In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

/*
function howMany(...args) {
  return "You have passed " + args.length + " arguments";
}

console.log(howMany(0, 1, 2)); // you have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], {})); // you have passed 4 arguments
*/

/*
const sum = (...args) => {
  const x = args;
  return x.reduce((a, b) => a + b, 0);
};

console.log(sum(0, 1, 2));
console.log(sum(1, 2, 3, 4));
*/

// **** ES6: Use the Spread Operator to Evaluate Arrays In-Place **** //

// ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

// The ES5 code below uses apply() to computer maximum value in an array:

/*
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
console.log(maximus);
*/

// We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.

/*
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
console.log(maximus);
*/

// ...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

// const spreaded = ...arr; // will throw a syntax error

// Copy all contents of arr1 into another array arr2 using the spread operator.

/*
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1];

console.log("Arr1 = ", arr1);
console.log("Arr2 = ", arr2);
*/

// **** ES6: Use Destructuring Assignment to Extract Values from Objects **** //

// Consider the following ES5 code:

/*
const user = { name: "Arsalan", age: 23 };
const name = user.name; // name = 'Arsalan'
const age = user.age; // age = 23
*/

// Here's an equivalent assignment statement using the ES6 destructuring syntax:

/*
const { name, age } = user;
console.log(age);
*/

// **** ES6: Use Destructuring Assignment to Assign Variables from Objects **** //

// Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

// Using the same object from the last example:

/*
const user = { name: "Arsalan", age: 23 };

// Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user;
// userName = 'Arsalan', userAge = 23
*/

// **** ES6: Use Destructuring Assignment to Assign Variables from Nested Objects **** //

// You can use the same principles from the previous two lessons to destructure values from nested objects.
// Using an object similar to previous examples:

/*
const user = {
  johnDoe: {
    age: 34,
    email: "johnDoe@freecodecamp.com",
  },
};

// Here's how to extract the values of object properties and assign them to variables with the same name:

const {
  johnDoe: { age, email },
} = user;
console.log(email);

// and here's how you can assign an object properties values to variable with different names:

const {
  johnDoe: { age: userAge, email: userEmail },
} = user;

console.log(userEmail);
*/

// **** ES6: Use Destructuring Assignment to Assign Variables from Arrays **** //
// ES6 makes destructuring arrays as easy as destructuring objects.

/* One key difference between the spread operator and array destructuring
is that the spread operator unpacks all contents of an array into a
comma-separated list. Consequently, you cannot pick or choose which
elements you want to assign to variables.
*/

// Destructuring an array lets us do exactly that:
/*
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
*/

// The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
/*
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
*/

// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a

/*
let a = 8,
  b = 6;
// Only change code below this line
[a, b] = [b, a];
*/

// **** ES6: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements **** //

// In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.
// The result is similar to Array.prototype.slice(), as shown below:

/*
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
*/

// **** ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters **** //
// In some cases, you can destructure the object in a function argument itself.
/*
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  console.log(name);
  console.log(age);
  console.log(nationality);
};


let user = {
  name: "arsalan",
  age: 23,
  nationality: "pakistani",
  location: "karachi",
};

profileUpdate(user);
*/

// This effectively destructures the object sent into the function. this can also be done-in-place:
/*
const profileUpdate = ({ name, age, nationality, location }) => {
  console.log(name);
  console.log(age);
  console.log(nationality);
  console.log(location);
};

profileUpdate(user);
*/

// **** ES6: Create Strings using Template Literals **** //
// A new feature in ES6 is the template literal. This is a special type of string
// that makes creating complex string easier.

// Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
/*
const person = {
  name: "Zodiac Hasbro",
  age: 12,
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
*/

// **** ES6: Write Concise Object Literal Declarations Using Object Property Shorthand **** //
// ES6 adds some nice support for easily defining object literals.

// consider the following code:

/*
const getMousePosition = (x, y) => ({
  x: x,
  y: y,
});
*/

/*
getMousePosition is a simple function that returns an object containing
two properties. ES6 provides the syntactic sugar to eliminate the
redundancy of having to write x: x. You can simply write x once,
and it will be converted tox: x (or something equivalent) under the hood.
Here is the same function from above rewritten to use this new syntax:
*/

// const getMousePosition = (x, y) => ({ x, y });

// **** ES6: Write Concise Declarative Functions with ES6 **** //

/*
const person = {
  name: "arsalan",
  sayHello: function () {
    return `Hello! My name is ${this.name}`;
  },
};

// With ES6, you can remove the function keyword and colon altogether when defining functions in objects.
// Here's an example of this syntax:

const person = {
  name: "arsalan",
  sayHello() {
    return `Hello! My name is ${this.name}`;
  },
};
*/

// **** ES6: Use class Syntax to Define a Constructor function **** //
// ES6 provides a new syntax to create objects using the class keyword.

// It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.
// In ES5, we usually define a constructor function and use the new Keyword to instantiate an object.

/*
var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet;
};

var zeus = new SpaceShuttle("Jupiter");
console.log(zeus);
*/

// The class syntax simply replaces the constructor function creation:

/*
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

const zeus = new SpaceShuttle("Pluto");
console.log(zeus);
*/

// It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.

// **** ES6: Use getters and setters to Control Access to an Object **** //

/*
You can obtain values from an object and set the value of a property within an object.

These are classically called getters and setters.

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.
*/

/*
class Book {
  constructor(author) {
    this._author = author;
  }

  // getter
  get writer() {
    return this._author;
  }

  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

const lol = new Book("anonymous");
console.log(lol.writer);

lol.writer = "wut";
console.log(lol.writer);
*/

// **** Promises **** //

// A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something,
// usually asynchronously. When the task completes, you either fulfill your promise or fail to do so.
// Promise is a constructor function, so you need to use the new keyword to create one. It takes a function,
// as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

/*
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
*/

// *** Handle a Fulfilled Promise with thenPassed ***//

// Promises are most useful when you have a process that takes an unknown amount of time in your code
// (i.e. something asynchronous), often a server request. When you make a server request it takes some
// amount of time, and after it completes you usually want to do something with the response from the server.
// This can be achieved by using the then method. The then method is executed immediately after your promise
// is fulfilled with resolve. Here’s an example:

/*
myPromise.then(result => {
  // do something with the result.
});

*/

// **** Handle a Rejected Promise with catch **** //

/*
myPromise.catch(error => {
  // do something with the error.
});
*/
