
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

console.log(accountId===id)  // false

console.log(typeof score);  //number
console.log(typeof userName); //string
console.log(typeof outsideTemp); // object
console.log(typeof isLoggedIn); // boolean
console.log(typeof accountId);  //symbol


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
console.log(typeof cities); // object
console.log(typeof user);  // object
console.log(typeof newFunction); // function
