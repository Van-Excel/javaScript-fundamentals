// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// alert('I am javascript');

console.log(2);

let mess = 'van';
let car = mess;
console.log(mess == car);

let lastname = 'acheampong';
let firstname = 'van';

//string concatenation
console.log(lastname + ' ' + firstname);

let last = 'can';
let first = 'vann';

//template strings

console.log(`${last} ${first}`);

let pie = null;
console.log(typeof pie);

console.log(pie === null);

//let result = prompt('where is your school located?',['Accra']);
//console.log(result);

/*let ans = confirm('are you a doctor?');
if (ans == true) {
    console.log('pay him')
}
*/

console.log(2 + '3');

let counter = 3;
let a = counter++;
console.log(a);
console.log(counter);

let additive = 4;
let b = --additive;
console.log(b);
b++;
console.log(b);

console.log('1' + '0');

//conditional branching
//ternary operator
let ride = 'accra';
let town = ride == 'accra' ? 'drive to accra' : 'order a new ride';
console.log(town);

//sequence of ternary operator tests
let age = 29;
let message =
  age < 10
    ? 'Hello'
    : age < 20
    ? 'proceed'
    : age < 30
    ? 'take the stairs'
    : 'wrong cohort';
console.log(message);

//testing a condition to run a block of code
let van = 'male';
if (van == 'female') {
  console.log('f');
} else {
  console.log('m');
}

//test multiple  conditions
let drug = 'tylenol';
if (drug == 'para') {
  console.log('headache');
} else if (drug == 'vitamins') {
  console.log('ulcer');
} else {
  console.log('prescribed tylenol for migraine');
}

//tasks
/* using if...else construct write the code which asks: what is the 
official name of javascript? 
If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”    */

/*let question = prompt('what is the official name of javascript?')
if (question == 'ECMAScript'){
    console.log('Right');
}else{
    console.log('You don’t know? ECMAScript!')
}
*/

/*  Rewrite this if using the conditional operator '?':

let result;

if (c + d < 4) {
  result = 'Below';
} else {
  result = 'Over';
}  */

//solution
let c = 2;
let d = 3;

let result = c + d < 4 ? 'Below' : 'Over';
console.log(result);

//logical operators

//chained OR ||- returns the first truthy value without conversion
// if all values are false, returns the last falsy
let fname = '';
let lname = null;
let localname = 'Van';

let newCondition = fname || lname || localname;
console.log(newCondition);

//chained AND &&- returns the first falsy value without conversion
let t1 = '0';
let t2 = 'ihn';
let t3 = 0;

let t_result = t1 && t2 && t3;
console.log(t_result);

//NOT operator !
//accepts a single argument, converts it to boolean and returns the inverse

console.log(!0); // returns inverse of false -- true

// double exclamation !! - converts value to boolean

let t5 = !!'vanexcel';
console.log(t5); // same as using Boolean() function

let t6 = !!null;
console.log(t6);

// nullish coalescing operator
//returns the first defined value

let user = 'hank';
console.log(user ?? 'not known');

//Loops
//while loop- while the condition is true, code in the loop body runs
//each single execution of the loop body is called an iteration
//code stops when loop condition returns false
//state, counters, recursion- using output as new source of input

let i = 0;
let u = [];
while (i < 5) {
  console.log(i);
  u.push(i);
  console.log(u);
  i++;
}

//do...while loop
//used when we want the body of the loop to execute at least once
//regardless of the condition being truthy or false.

let loop1 = 2;
do {
  console.log(`i am ${loop1} years old`);
  loop1++;
} while (loop1 < 6);

//for loop
//has the begin, condition and step parts
let array1 = [];
for (let loop2 = 1; loop2 < 5; loop2++) {
  let r = loop2 * 2;
  array1.push(r);
  console.log(array1);
}

//switch statement
//utilizes the break statement

let case1 = 3;
switch (case1) {
  case 1:
    console.log('you are close');
    break;
  case 2:
    console.log('not true');
    break;
  case 3:
    console.log('true');
    break;
  default:
    console.log('we didnt find it');
}

//functions
//function declarations

//design a function that shows sender and recipient of message

function messageDetails(sender, recipient) {
  let messageStatus = `this message was sent by ${sender} to ${recipient}`;
  console.log(messageStatus);
  return messageStatus;
}
//calling function messageDetails
messageDetails('Van', 'Lynn');


//how to pass arrays and objects as function parameters ***
//learn more and come back to this problem
/*function calcArray(tArray[]) {
  let finalArray = [];
  for (let i = i; i < 5; ) {
    let val = i * 5;
    finalArray.push(val);
    console.log(finalArray);
    return finalArray;
  }
} */

//calcArray([2, 1, 4]);


//function expressions
/* in javascript functions are first class objects which means
they can be treated as normal objects, referenced as variables, declared as literals and even passed as function parameters 
*/

//allows us to create a new function in the middle of
// an expression

//arrow functions
//concise syntax of functions


//function expression
let deal1 = function(a,b){
  let answer = a * b;
  console.log(answer);
  return answer;
}
//calling function
deal1(3,5)


//arrow function version
let deal2 = (a, b) => a * b
console.log(deal2(3,3))
//Objects
//are used to store keyed collections of data and complex entities
// a property is a key:value pair

//creating objects
let user1 = new Object(); //object constructor syntax
let users = {}; // object literal syntax

//putting properties in objects

let user2 = {
  name: 'Van',
  age: 23,
  school: 'Alpha Beta',
  isAdmin: false,
};

//read property
console.log(user2.school);
console.log(user2);

//delete property
delete user2.isAdmin;
console.log(user2);

//use square brackets to access properties if it's multiworded
//must also be in quotes

user2['first nationality'] = 'Ghanaian';
console.log(user2);
console.log(user2['first nationality']);

//can also be used to access object properties in expressions
let course = 'school';
console.log(user2[course]);

//computed properties
//using square brackets in an object literal

let fruits = 'apple';
let vegetable = 'cucumber';
let shopCart = {
  [fruits]: 30,
  [vegetable]: 21,
};

console.log(shopCart);
console.log(shopCart.cucumber);

//property existence test
console.log(shopCart.vegetable === undefined); //doesn't exist

//in case the property value is undefined, use the in operator
console.log('cucumber' in shopCart); //returns true

//for...in
// the in operators syntax is a condition that returns a boolean
//by pairing it with the for keyword,  you can easily create a
// for loop that loops over an object's properties
//we can use it if we don't know the property name
//doesn't require specificity

for (let property in shopCart) {
  console.log(shopCart[property]);
}

//write a function isEmpty() which returns true if the object has
//no properties, false otherwise.

let user3 = {};

function isEmpty(user) {
  for (let prop in user) {
    return false;
  }
  return true;
}

//always try to understand the problem statement before coding

//calling function
console.log(isEmpty(user3));

let salaries = {
  John: 100,
  Ann: 140,
  Pete: 40,
};
//write code to sum the salaries and store in the variable sum
let array4 = [];
for (let prop in salaries) {
  let sum = salaries[prop];
  array4.push(sum);
  console.log(array4);
}

let sum = 0;
for (let i = 0; i < array4.length; i++){
  sum = sum + array4[i];
 
}
console.log(`The sum of the salaries is ${sum}ghs`);