
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

// console.log(accountName)  // "Raviraj Singh"
// console.log(accountNameTwo)  //"Snehal jadhav"
/* so here js creates a copy of variable and when we change or update the value
 it will make changes in copy variable not is actual variable */


 const userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
 }

 const userTwo = userOne

 userTwo.email = "john@gmail.com"

 const array = ["snehal","ravi","sid","rash"]
 const array2 = array
 array2[0] = "sai"

//  console.log(userOne)
//  console.log(userTwo)

// console.log(array)
//  console.log(array2)

 /* userTwo and userOne are stored in stack but the values are stored in heap memory
 here in objects store in heap memory and whenever we change or update 
 it will refer to the actual object it does not make a copy */



 // reverse a string
 const str = "Javascript Code"
 
//  for(let i=str.length -1; i>=0;i--){
//     reversed += str[i];
//  }
//  console.log(reversed);

 const words = str.split(" ")
let result = ""
 for(const word of words){
    let reversed = "";
 for(let i=word.length-1; i>=0;i--){
    reversed += word[i]
 }
 result += reversed + " "
}
// console.log(result.trim())


function outer(){
   var a =2;
   function inner(){
      console.log(a++)
   }
   return inner;
}

const count = outer() 
   count()
   count()