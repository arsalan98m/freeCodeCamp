// *** Comments *** //

// Comments are lines of code that JavaScript will intentionally ignore.

// There are two ways to write comments in JavaScript:

// no 1 is double slash  will tell JavaScript to ignore the remainder of the text on the current line:

// no 2 is multi line comment like this /* */

// *** Declare JavaScript Variables *** //

/*
In computer science, data is anything that is meaningful to the computer. 
JavaScript provides seven different data types which are undefined, null, boolean, string, symbol, number, and object.
*/

/*
Variables allow computers to store and manipulate data in a dynamic fashion.
They do this by using a "label" to point to the data rather than using the data itself.
Any of the seven data types may be stored in a variable. */

// We tell JavaScript to create or declare a variable by putting the keyword var in front of it, like so:

var ourName;

/*
creates a variable called ourName. In JavaScript we end statements with semicolons. 
Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.
*/

var myName;

// *** Storing Values with the Assignment Operator *** //

// In JavaScript, you can store a value in a variable with the assignment operator.

// myVariable = 5;
// This assigns the Number value 5 to myVariable.

/*
Assignment always goes from right to left.
Everything to the right of the = operator is resolved before the value is assigned to the variable to the left of the operator. */

// Setup
var a;
var b = 2;

// Only change code below this line
a = 7;
b = a;

var myVar = 0;
var a = 9;

// *** Understanding Uninitialized Variables ***//

/*
When JavaScript variables are declared, they have an initial value of undefined.
If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". 
If you concatenate a string with an undefined variable, you will get a literal string of "undefined".
*/

// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

a = 6;
b = 15;
c = "I am a String!";

// *** Understanding Case Sensitivity in Variables *** //

// In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

/*
MYVAR is not the same as MyVar nor myvar. It is possible to have multiple distinct variables with the same name but different casing.
It is strongly recommended that for the sake of clarity, you do not use this language feature.

*/

// Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// *** Add Two Numbers with JavaScript *** //

// Number is a data type in JavaScript which represents numeric data.

// JavaScript uses the + symbol as an addition operator when placed between two numbers.

var sum = 10 + 10; // 20;

// *** Subtract One Number from Another with JavaScript *** //

// JavaScript uses the - symbol for subtraction.

var difference = 45 - 33;

// *** Multiply Two Numbers with JavaScript ***//

// Multiply Two Numbers with JavaScript

var product = 8 * 80;

// *** Divide One Number by Another with JavaScript ***//

var quotient = 66 / 33;

// *** Increment a Number with JavaScript ***//
// You can easily increment or add one to a variable with the ++ operator.

// i++ is equivalen to i = i + 1;

var myVar = 87;

// Only change code below this line
myVar++;

// *** Decrement a Number with JavaScript *** //
// You can easily decrement or decrease a variable by one with the -- operator.

// i--; is equivalen to i = i - 1;

var myVar = 11;

// Only change code below this line
myVar--;

// *** Create Decimal Numbers with JavaScript *** //

// We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as floating point numbers or floats.

var myDecial = 5.7;

// *** Multiply Two Decimals with JavaScript *** //
// In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.

var product = 2.0 * 2.0 + 1;

var quotient = 4.4 / 2.0;

// *** Finding a Remainder in JavaScript *** //

// The remainder operator % gives the remainder of the division of two numbers.

/*

5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder) 

*/

/*
The remainder operator is sometimes incorrectly referred to as the "modulus" operator. It is very similar to modulus, 
but does not work properly with negative numbers.
*/

var remainder;
remainder = 11 % 3;

// *** Compound Assignment With Augmented Addition *** //

// In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

var myVar = 1;

myVar = myVar + 5;

// one such operator is the += operator.

var myVar = 1;
myVar += 5; // myVar returns 6

// Like the += operator, -= subtracts a number from a variable.

// myVar = myVar - 5;
//will subtract 5 from myVar. This can be rewritten as:

// myVar -= 5;

var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// The *= operator multiplies a variable by a number.

myVar = myVar * 5;

// will multiply myVar by 5. This can be rewritten as:

myVar *= 5;

// The /= operator divides a variable by another number.

myVar = myVar / 5;

// Will divide myVar by 5. This can be rewritten as:

// myVar /= 5;

// *** Declare String Variables *** //

var myName = "your name";

// "your name" is called a string literal. It is a string because it is a series of zero or more characters enclosed in single or double quotes.

var myFirstName = "m.arsalan";
var myLastName = "manzoor";

// *** Escaping Literal Quotes in Strings *** //

/*

When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: " or ' inside of your string?

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.

var sampleStr = "Alan said, \"Peter is learning JavaScript\".";

This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:

Alan said, "Peter is learning JavaScript".

*/

var myStr = 'I am a "double quoted" string inside "double quotes".';

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// *** Escape Sequences in Strings ***

/*

Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters:

1.To allow you to use characters you may not otherwise be able to type out, such as a carriage return.

2. To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.

\' --- single quote
\" --- double quote
\\ --- backslash
\n --- new line
\r --- carriage return
\t --- tab
\b --- word boundary
\f --- form feed
 
*/

var myStr;
myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// *** Concatenating Strings with Plus Operator *** //

// In JavaScript, when the + operator is used with a String value, it is called the concatenation operator. You can build a new string out of other strings by concatenating them together.

var myStr = "This is the start. " + "This is the end.";

// *** Concatenating Strings with the Plus Equals Operator *** //

// We can also use the += operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

var myName = "arsalan";
var myStr = "My name is " + myName + " and I am well!";

// *** Appending Variables to Strings *** //

// Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
// ourStr is now "freeCodeCamp is awesome!"

// *** Find the Length of a String *** //

// You can find the length of a String value by writing .length after the string variable or string literal.

// "Alan Peter".length; // 10

// For example, if we created a variable var firstName = "Charles", we could find out how long the string "Charles" is by using the firstName.length property.

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

// ***Use Bracket Notation to Find the First Character in a String***//

// Bracket notation is a way to get a character at a specific index within a string.

/*
For example, the character at index 0 in the word "Charles" is "C".
 So if var firstName = "Charles", you can get the value of the first
  letter of the string by using firstName[0].*/

var firstName = "arsalan";
var firstLetter = firstName[0]; // firstLetter is 'a'

// ***Understand String Immutability*** //

// In JavaScript, String values are immutable, which means that they cannot be altered once created.

// For example, the following code:

/*
var myStr = "Bob";
myStr[1] = "J";
console.log(myStr);
*/

var myStr = "Jello World";
myStr = "Hello World";

// *** Use Bracket Notation to Find the Nth Character in a String  ***//
// You can also use bracket notation to get the character at other positions within a string.

var lastName = "Lovelace";
var thirdLetterofLastName = lastName[2];

// *** Use Bracket Notation to Find the Last Character in a String *** //
// In order to get the last letter of a string, you can subtract one from the string's length.

// For example, if var firstName = "Charles", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

var lastName = "Lovelace";

var lastLetterOfLastName = lastName[lastName.length - 1];

// *** Use Bracket Notation to Find the Nth-to-Last Character in a String *** //

// You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

// For example, you can get the value of the third-to-last letter of the var firstName = "Charles" string by using firstName[firstName.length - 3]

var lastName = "Lovelace";

var secondToLastLetterOfLastName = lastName[lastName.length - 2];

// *** Store Multiple Values in one Variable using JavaScript Arrays *** //

// With JavaScript array variables, we can store several pieces of data in one place.

// You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

var sandwich = ["peanut butter", "jelly", "bread"];

var myArray = [];
myArray = ["hello", 20];

// *** Nest one Array within Another Array *** //

// you can also nest arrays within other array like below

// [['Bulls' ,23], ['white', 45]]

// this is called multi-dimensional array

// *** Access Array Data with Indexes *** //

// We can access the data inside arrays using indexes.

/* Array indexes are written in the same bracket notation that strings use,
except that instead of specifying a character, they are specifying an entry
in the array. Like strings, arrays use zero-based indexing, so the first
element in an array has an index of 0.*/

var myArray = [50, 60, 70];
myArray[0]; // return 50

var myData = myArray[0];

// *** Modify Array Data With Indexes *** //

// Unlike strings, the entries of arrays are mutable and can be changed freely.

var ourArray = [50, 30, 10];
ourArray[0] = 15; // equal [15,30,10]

// *** Access Multi-Dimensional Arrays With Indexes *** //

/*
One way to think of a multi-dimensional array, is as an array of arrays.
When you use brackets to access your array, the first set of brackets 
refers to the entries in the outer-most (the first level) array, 
and each additional pair of brackets refers to the next level of entries inside.
*/

var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11

// *** Manipulate Arrays With push() *** //

// An easy way to append data to the end of an array is via the push() function.

// .push() takes one or more parameters and "pushes" them onto the end of the array.

var arr1 = [1, 2, 3];
arr1.push(4);
// arr1 is now [1,2,3,4]

var arr2 = ["Stimpson", "J", "Cat"];
arr2.push(["happy", "Joy"]);
// arr2 is not  ['Stimpson', 'J', 'Cat', ["happy", "Joy"]]

// *** Manipulate Arrays With pop() ***//

// Another way to change the data in an array is with the .pop() function.

/*
.pop() is used to "pop" a value off of the end of an array.
We can store this "popped off" value by assigning it to a variable.
In other words, .pop() removes the last element from an array and 
returns that element.*/

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(threeArr); // [1,4];
console.log(oneDown); // 6

// *** Manipulate Arrays With shift() *** //

// pop() always removes the last element of an array. What if you want to remove the first?

// That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

var ourArray = ["Stimpson", "j", ["cat"]];
var removedFromOurArray = ourArray.shift(); // Stimpson

// *** Manipulate Arrays With unshift() *** //

// Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

var ourArray = ["Stimpson", "J", "Cat"];

ourArray.shift(); // ourArray is now Stimpson

ourArray.unshift("Happy");
// ourArray is now ["Happy", "J", "Cat"]

// *** Write Reusable JavaScript with Functions *** //

// In JavaScript, we can divide up our code into reusable parts called functions.

// Here is an example

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

/*
You can call or invoke this function by using its name followed by parentheses,
like this: functionName(); Each time the function is called it will print out 
the message "Hello World" on the dev console. All of the code between the curly
braces will be executed every time the function is called.*/

// *** Passing Values to Functions with Arguments *** //

/*
Parameters are variables that act as placeholders for the values that are to be
input to a function when it is called. When a function is defined, it is
typically defined along with one or more parameters. The actual values that are
input (or "passed") into a function when it is called are known as arguments.*/

function functionWithArgs(num1, num2) {
  console.log(num1 + num2);
}

functionWithArgs(10, 20);

// *** Global Scope and Functions *** //

// In JavaScript, scope refers to the visibility of variables.
// Variables which are defined outside of a function block have Global scope.
// This means, they can be seen everywhere in your JavaScript code.

/*
Variables which are used without the var keyword are automatically created in the 
global scope. This can create unintended consequences elsewhere in your code or
when running a function again. You should always declare your variables with var.
*/

// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun2();

// *** Local Scope and Functions *** //

// Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.

// Here is a function myTest with a local variable called loc.

/*
function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined
*/

/*
function myLocalScope() {
    'use strict';
  
    var myVar;
    // Only change code below this line
  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

  */

// *** Global vs. Local Scope in Functions *** //

// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable

/*
var someVar = "Hat";

function myFun() {
  var someVar = "Head";
  console.log(someVar);
}

myFun();
console.log(someVar);
*/

// *** Return a Value from a Function with Return *** //

// We can pass values into a function with arguments. you can use a return statement to send a value back out of a function

/*
function plusThree(num) {
  return num + 3;
}

var answer = plusThree(5); // 8
console.log(answer);
*/

// *** Understanding Undefined Value returned from a Function *** //

/*
A function can include the return statement but it does not have to.
In the case that the function doesn't have a return statement, when you call it,
the function processes the inner code but the returned value is undefined.
*/

var sum = 0;
function addSum(num) {
  sum = sum + num;
}

console.log(addSum(3));
console.log(sum);

// addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

// *** Understanding Boolean Values *** //

/*
Another data type is the Boolean. Booleans may only be one of two values:
true or false. They are basically little on-off switches, where true is "on" 
and false is "off." These two states are mutually exclusive.
*/

// Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

function welcomeToBooleans() {
  return true;
}

// *** Use Conditional Logic with If Statements *** //

/*
If statements are used to make decisions in code. The keyword if tells JavaScript
to execute the code in the curly braces under certain conditions, defined in the 
parentheses. These conditions are known as Boolean conditions and they may only
be true or false.*/

/*
When the condition evaluates to true, the program executes the statement inside 
the curly braces. When the Boolean condition evaluates to false, the statement 
inside the curly braces will not execute.*/

/*
function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

console.log(test(true));
console.log(test(false));
*/

// *** Comparison with the Equality Operator *** //

// There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

/*
The most basic operator is the equality operator ==. The equality operator compares 
two values and returns true if they're equivalent or false if they are not. Note 
that equality is different from assignment (=), which assigns the value on the 
right of the operator to a variable on the left.
*/

/*
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
*/

// *** Comparison with the Strict Equality Operator *** //

/*
Strict equality (===) is the counterpart to the equality operator (==).
However, unlike the equality operator, which attempts to convert both 
values being compared to a common type, the strict equality operator 
does not perform a type conversion.
*/

// If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

// 3 === 3  true
// 3 ==='3' false

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

3 == "3"; // returns true because JavaScript performs type conversion from string to number
3 === "3"; // returns false because the types are different and type conversion is not performed

typeof 3; // returns 'number'
typeof "3"; // returns 'string'

// *** Comparison with the Inequality Operator *** //

/*
The inequality operator (!=) is the opposite of the equality operator.
It means "Not Equal" and returns false where equality would return 
true and vice versa. Like the equality operator, the inequality operator
will convert data types of values while comparing.*/

1 != 2; // true
1 != "1"; // false
1 != "1"; // false
1 != true; // false
0 != false; // false

function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

// *** Comparison with the Strict Inequality Operator *** //

/*
The strict inequality operator (!==) is the logical opposite of the strict equality
operator. It means "Strictly Not Equal" and returns false where strict equality would
return true and vice versa. Strict inequality will not convert data types.
*/

/*
3 !== 3; // false
3 !== "3"; // true
4 !== 3; // true

function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
*/

// *** Comparison with the Greater Than Operator *** //

/* The greater than operator (>) compares the values of two numbers. If the number to the left is greater
than the number to the right, it returns true. Otherwise, it returns false.*/

// Like the equality operator, greater than operator will convert data types of values while comparing.

function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

// *** Comparison with the Greater Than Or Equal To Operator *** //

/*
The greater than or equal to operator (>=) compares the values of two numbers.
If the number to the left is greater than or equal to the number to the right,
it returns true. Otherwise, it returns false.
*/

// Like the equality operator, greater than or equal to operator will convert data types while comparing.

/*
function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
*/

// *** Comparison with the Less Than or Equal to  Operator *** //

/*
The less than operator (<) compares the values of two numbers. If the number to
the left is less than the number to the right, it returns true. Otherwise, it
returns false. Like the equality operator, less than operator converts data types while comparing.
*/

2 < 5; // true
"3" < 7; // true
5 < 5; // false
3 < 2; // false
"8" < 4; // false

function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

// *** Comparisons with the Logical And Operator *** //

// Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

// The same effect could be achieved by nesting an if statement inside another if:

/*
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
*/

// will only return "Yes" if num is greater than 5 and less than 10. The same logic can be written as:

/*
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
*/

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  return "No";
}

testLogicalAnd(10);

// *** Comparisons with the Logical Or Operator *** //

//The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

// The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

/*
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
*/

// will return "Yes" only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

/*
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
*/
// *** Introducing Else Statements *** //

/*
When a condition for an if statement is true, the block of code following it is
executed. What about when that condition is false? Normally nothing would happen.
With an else statement, an alternate block of code can be executed.
*/

/*
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
*/

// *** Introducing Else If Statements ***//

// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

/*
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
*/

// *** Selecting from Many Options with Switch Statements *** /

/*
If you have many options to choose from, use a switch statement.
A switch statement tests a value and can have many case statements
which define various possible values. Statements are executed from 
the first matched case value until a break is encountered.
*/

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      return "no match case";
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

// *** Multiple Identical Options in Switch Statements *** //

/*
If the break statement is omitted from a switch statement's case,
the following case statement(s) are executed until a break is encountered.
If you have multiple inputs with the same output, you can represent them 
in a switch statement.
*/

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  // Only change code above this line
  return answer;
}

sequentialSizes(1);

// *** Returning Boolean Values from Functions *** //

// Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

// But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function isEqual(a, b) {
  return a === b;
}

// *** Build JavaScript Objects *** //

// Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

// Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

var cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"],
};

var anotherObject = {
  make: "Ford",
  5: "five",
  model: "focus",
};

// *** Accessing Object Properties with Dot Notation *** //

// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

// Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

var myObj = {
  prop1: "val1",
  prop2: "val2",
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2

// another example

var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

// *** Accessing Object Properties with Bracket Notation *** //

// The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

// However, you can still use bracket notation on object properties without spaces.

var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  NoSpace: "USS Enterprise",
};
myObj["Space Name"]; // Kirk
myObj["More Space"]; // Spock
myObj["NoSpace"]; // USS Enterprise

// *** Accessing Object Properties with Variables *** //

/*
Another use of bracket notation on objects is to access a property which is
stored as the value of a variable. This can be very useful for iterating
through an object's properties or when accessing a lookup table.
*/

// Here is an example of using a variable to access a property:

var dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle",
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"

// Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

var someObj = {
  propName: "John",
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"

// *** Updating Object Properties *** //

// After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.

var myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

// Only change code below this line

myDog.name = "Happy Coder";
console.log(myDog);

// *** Add New Properties to a JavaScript Object *** //

var myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog["bark"] = "wow-wow";

// *** Delete Properties from a JavaScript Object ***

// We can also delete properties from objects like this:

var myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};

delete myDog.tails;

// *** Using Objects for Lookups *** //

/*
Objects can be thought of as a key/value storage, like a dictionary. 
If you have tabular data, you can use an object to "lookup" values 
rather than a switch statement or an if/else chain.
This is most useful when you know that your input data is limited to a
certain range.
*/

function phoneticLookup(val) {
  // Only change code below this line
  // switch(val) {
  //   case "alpha":
  //     result = "Adams";
  //     break;
  //   case "bravo":
  //     result = "Boston";
  //     break;
  //   case "charlie":
  //     result = "Chicago";
  //     break;
  //   case "delta":
  //     result = "Denver";
  //     break;
  //   case "echo":
  //     result = "Easy";
  //     break;
  //   case "foxtrot":
  //     result = "Frank";
  // }

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  var result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

// *** Testing Objects for Properties *** //

/* 
Sometimes it is useful to check if the property of a given object exists or not.
We can use the .hasOwnProperty(propname) method of objects to determine if that
object has the given property name. .hasOwnProperty() returns true or false if
the property is found or not.
*/

var myObj = {
  top: "hat",
  bottom: "pants",
};
myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty("middle"); // falses

// *** Accessing Nested Objects *** //

var ourStorage = {
  desk: {
    drawer: "stapler",
  },
  cabinet: {
    "top drawer": {
      folder1: "a file",
      folder2: "secrets",
    },
    "bottom drawer": "soda",
  },
};
ourStorage.cabinet["top drawer"].folder2; // "secrets"
ourStorage.desk.drawer; // "stapler"

// *** Accessing Nested Arrays *** //

// As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.

var ourPets = [
  {
    animalType: "cat",
    names: ["Meowzer", "Fluffy", "Kit-Cat"],
  },
  {
    animalType: "dog",
    names: ["Spot", "Bowser", "Frankie"],
  },
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"

// Object Examples

/* var a = {
fname: 'yahoo',
lname: 'baba',
age: 22,
email: 'yahoo@gmail.com',
favMovies: ['dhoom', 'hulchul', 'hum'],
living: {
  city: 'karachi',
  country: 'pakistan'
},
salary: function(){
  return 25000;
},
fullname: function(){
  return a.fname+" "+a.lname;
}
}

document.write(a.fname);
console.log(a);
document.write(a.salary());

document.write(a.fullname());

document.write(a.living.city) */

/* 
var b = new Object();

b.firstname= 'abid';
b.lastname='shaka';
b.age = 25;

console.log(b); */

// *** Iterate with JavaScript While Loops *** //

// The first type of loop we will learn is called a while loop because it runs "while" a specified condition is true and stops once that condition is no longer true.

var ourArray = [];
var i = 0;
while (i < 5) {
  ourArray.push(i);
  i++;
}

// *** Iterate with JavaScript For Loops *** //

// The most common type of JavaScript loop is called a for loop because it runs "for" a specific number of times

// For loops are declared with three optional expressions separated by semicolons:

// for ([initialization]; [condition]; [final-expression])

var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// *** Iterate Through an Array with a For Loop *** //

// A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:

var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// *** Nesting For Loops *** //

// If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

var arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

// *** Iterate with JavaScript Do...While Loops *** //

/*
The next type of loop you will learn is called a do...while loop.
It is called a do...while loop because it will first do one pass
of the code inside the loop no matter what, and then continue
to run the loop while the specified condition evaluates to true.
*/

// Essentially, a do...while loop ensures that the code inside the loop will run at least once

var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

// *** Use the Conditional (Ternary) Operator *** //

// The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

// The following function uses an if-else statement to check a condition:

function findGreater(a, b) {
  if (a > b) {
    return "a is greater";
  } else {
    return "b is greater";
  }
}

// This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}

// *** Use Multiple Conditional (Ternary) Operators *** //

// In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

// The following function uses if, else if, and else statements to check multiple conditions:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  } else if (a > b) {
    return "a is greater";
  } else {
    return "b is greater";
  }
}

// The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
  return a === b
    ? "a and b are equal"
    : a > b
    ? "a is greater"
    : "b is greater";
}
