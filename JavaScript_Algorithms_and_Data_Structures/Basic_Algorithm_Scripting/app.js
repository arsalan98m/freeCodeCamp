// **** Basic Algorithm Scripting: Convert Celsius to Fahrenheit **** //

/*
function convertToF(celsius) {
    let fahrenheit = (celsius * 9/5) +32;
    return fahrenheit;
  }
  
console.log(convertToF(30));
*/

// **** Basic Algorithm Scripting: Reverse a String **** //

/*
function reverseString(str) {
    let arrayString = str.split("");
    let reverseString = "";
    for (let i=arrayString.length-1;i>=0;i--){
      reverseString += arrayString[i];
    }
    return reverseString;
  }
  
console.log(reverseString("hello"));
*/

// **** Basic Algorithm Scripting: Factorialize a Number **** //

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

/*
function factorialize(num) {
    let fact = 1;
  
    for(var i=1;i<=num;i++){
      fact = fact * i;
       }
  
    
    return fact;
  }
  
factorialize(5);
*/

// **** Basic Algorithm Scripting: Find the Longest Word in a String **** //

// Return the length of the longest word in the provided sentence.

/*
function findLongestWordLength(str) {
    let arrayString = str.split(" ");
     
    let findLongestWord = arrayString[0];
    
    for (let i=0;i<arrayString.length;i++){
      if(arrayString[i].length > findLongestWord.length){
        findLongestWord = arrayString[i]
      }
    }
  
    return findLongestWord.length;
   
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
*/

// **** Basic Algorithm Scripting: Return Largest Numbers in Arrays **** //

/*
function largestOfFour(arr) {
    let newArray = []
  
    for(let i=0;i<arr.length;i++){
      
      let largestNumber = arr[i][0];
  
      for(let j=0;j<arr[i].length;j++){
        if(arr[i][j] > largestNumber){
          largestNumber = arr[i][j];
          
        }
      }
      newArray[i]= largestNumber;
  
    }
  
   
    return newArray;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  */

// **** Basic Algorithm Scripting: Confirm the Ending **** //

// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead

/*
function confirmEnding(str, target) {
    //console.log(str.substr(-target.length))
    return str.substr(-target.length) === target;
  }
  
  confirmEnding("Bastian", "n");
*/

// **** Basic Algorithm Scripting: Repeat a String Repeat a String  **** //

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

/*
function repeatStringNumTimes(str, num) {
    let repeatString = "";
    while(num>0){
      repeatString += str;
      num--;
    }
   
    return repeatString;
     
   }
   
   repeatStringNumTimes("abc", 3);
*/

// **** Basic Algorithm Scripting: Truncate a String **** //

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

/*
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
*/

// **** Basic Algorithm Scripting: Finders Keepers **** //

/* Create a function that looks through an array arr and returns the
 first element in it that passes a 'truth test'. This means that given 
 an element x, the 'truth test' is passed if func(x) is true. If no 
 element passes the test, return undefined.
 */

/*
function findElement(arr, func) {
  let num = 0;

  for (let i of arr){
    num = i;
    if(func(num)){
      return num
    }
     
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
*/

// **** Basic Algorithm Scripting: Boo who **** //
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

/*
function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  }

  return false;
}

booWho(null);
*/

// Basic Algorithm Scripting: Title Case a Sentence **** //

/*
function titleCase(str) {
  return str
    .split(" ")
    .map((elem) => elem[0].toUpperCase() + elem.slice(1).toLowerCase())
    .join(" ");
}

titleCase("I'm a little tea pot");
*/

// **** Basic Algorithm Scripting: Slice and Splice **** //
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

/*
function frankenSplice(arr1, arr2, n) {
  let newArray = [...arr2];

  newArray.splice(n, 0, ...arr1);

  return newArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
*/

// **** Basic Algorithm Scripting: Falsy Bouncer **** //

// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

/*
function bouncer(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

bouncer([7, "ate", "", false, 9]);
*/

// **** Basic Algorithm Scripting: Where do I Belong **** //
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
// getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.

/*
function getIndexToIns(arr, num) {
  var count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      count++;
    }
  }
  return count;
}

getIndexToIns([40, 60], 50);
*/

// **** Basic Algorithm Scripting: Mutations **** //

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y"
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

/*
function mutation(arr) {
  let target = arr[0].toLowerCase();
  let test = arr[1].toLowerCase();
  //console.log(target.indexOf(test[0]));

  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) {
      return false;
    }
  }

  return true;
}

mutation(["hello", "hey"]);
*/

// **** Basic Algorithm Scripting: Chunky Monkey **** //

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let newArray = [];

  for (let i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(i, i + size));
  }

  return newArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
