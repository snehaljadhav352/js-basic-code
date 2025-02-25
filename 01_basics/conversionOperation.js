 let score = false;

//  console.log(typeof score)  // string
//  console.log(typeof (score)) // string

 // conversion to Number
 let convertToNumber = Number(score)
//  console.log(typeof convertToNumber)
//  console.log(convertToNumber)

 // "33" => 33 (type=number)
 // "33abc" => NaN (type=number)
 // "null" => 0 (type=number)
 // true/false => 1/0 (type=number)

 // Conversion to Boolean
 let age = null;
 let convertToBolean = Boolean(age)
//  console.log(typeof convertToBolean)
//  console.log(convertToBolean)

 // ""=> false
 // "snehal"=>true
 // 33 => true
 //null => false


 // conversion to String
 let someNumber = true
let converToString = String(someNumber)
console.log(converToString)
console.log(typeof converToString)

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

