
const score = 100;

const newScore = new Number(200.4444)
// console.log(newScore)

// console.log(newScore.toPrecision(4))

const newNumber = 1000000
// console.log(newNumber.toLocaleString("en-IN"))




//*******************************MATH******************************************************************************/


// console.log(Math.abs(-4))  // convert negative values into positive
// console.log(Math.round(3.5666))
console.log(Math.floor(2.6)) // rounds a number DOWN to the nearest integer.
console.log(Math.ceil(2.6)) // it gives highest value and round the number
console.log(Math.trunc(2.6456773)) //returns the integer part of a number. The Math. trunc() method removes the decimals (does NOT round the number).


// console.log(Math.random())
// console.log(Math.random() * 10) // want to shift value to one decimal
// console.log(Math.random() * 10 +1 ) // here i dont want 0 in value so i have add 1 to it so now it gives me at least 1 number value

const min = 1
const max = 6; // but in some cases we want values in particular range
// so here i am not multiplying value with 10 bcoz i want value between min and max and for avoiding 0 case i have added 1 to it

// console.log(Math.floor(Math.random() *(max-min+1))+min) // in dice game we can use this


/* math.random always gives us s ramdom value between 0 and 1 */