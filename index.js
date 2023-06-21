// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// alert('I am javascript');

console.log(2)

let mess = 'van';
let car = mess;
console.log(mess == car);


let lastname = 'acheampong'
let firstname = 'van'


//string concatenation
console.log(lastname + ' ' + firstname)


let last = 'can';
let first = 'vann';

//template strings

console.log(`${last} ${first}`)


let pie = null
console.log(typeof pie)

console.log( pie === null)

//let result = prompt('where is your school located?',['Accra']);
//console.log(result);


/*let ans = confirm('are you a doctor?');
if (ans == true) {
    console.log('pay him')
}
*/


console.log(2 + '3')
 

let counter = 3;
let a = counter++
console.log(a)
console.log(counter)

let additive = 4;
let b = --additive;
console.log(b)
b++
console.log(b)

console.log('1' + '0')



//conditional branching
//ternary operator
let ride = 'accra';
let town = ride == 'accra'? 'drive to accra':'order a new ride';
console.log(town);

//sequence of ternary operator tests
let age = 29;
let message = (age < 10)? 'Hello':
age < 20 ? 'proceed':
age < 30 ? 'take the stairs': 
'wrong cohort';
console.log(message);


//testing a condition to run a block of code
let van = 'male';
if( van == 'female'){
    console.log('f');

}else {
    console.log('m');
}


//test multiple  conditions
let drug = 'tylenol';
if (drug == 'para'){
    console.log('headache');
}else if (drug == 'vitamins'){
    console.log('ulcer')
}else{
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

let result = (c + d < 4)? 'Below': 'Over';
console.log(result)


//logical operators


//chained OR ||- returns the first truthy value without conversion
// if all values are false, returns the last falsy
let fname = '';
let lname = null;
let localname = 'Van';

let newCondition = (fname || lname|| localname);
console.log(newCondition)
