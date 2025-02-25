
// primitive dataTypes 7 types
// string, number, boolean, null, undefined, bigInt, symbol

let score = 100;     //
let percentage = 70.5;
let userName = "Snehal"
let outsideTemp = null;
let currentState;
let isLoggedIn = true;
let accountId = Symbol("123")
let id = Symbol("123")

// console.log(accountId===id)  // false
// console.log(typeof score);  //number
// console.log(typeof userName); //string
// console.log(typeof outsideTemp); // object
// console.log(typeof isLoggedIn); // boolean
// console.log(typeof accountId);  //symbol


// Non Primitive (Refrence Datatypes)

// Array, Object,Functions

const cities = ["Pune","Mumbai","Benglore"];

const user = {
    name:"Snehal",
    age:28,
}

const newFunction = function(){
    console.log("Hello")
}
// console.log(typeof cities); // object
// console.log(typeof user);  // object
// console.log(typeof newFunction); // function




/*****************************************************************************************************************************/

/* 
In Javascript there are two memories
Stack=> used in primitive datatypes
       in stack creates a copy of variable
Heap=> used in non-primitive datatypes
      in heap whatever change happen it will change or update in original place or refrence
*/

const accountName = "Raviraj Singh"
let accountNameTwo = accountName;
accountNameTwo = "Snehal jadhav"

console.log(accountName)  // "Raviraj Singh"
console.log(accountNameTwo)  //"Snehal jadhav"
/* so here js creates a copy of variable and when we change or update the value
 it will make changes in copy variable not is actual variable */


 const userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
 }

 const userTwo = userOne

 userTwo.email = "john@gmail.com"

 console.log(userOne)
 console.log(userTwo)

 /* userTwo and userOne are stored in stack but the values are stored in heap memory
 here in objects store in heap memory and whenever we change or update 
 it will refer to the actual object it does not make a copy */
