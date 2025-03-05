
const name = "snehal ";
const age = 28;

console.log(name + age);  // we get the output but as per modern techniques of Js we should use new techniques

console.log(`Hello my name is ${name} and I am ${age} old.`)

const username = new String("san-tosh");   
/* here we can declare string using new keyword it is same like normalstring... 
 but here it creates a object and object has lots of methods */
// String methods

console.log(username.__proto__) // it gives empty object

console.log(username.charAt(2))  // it gives us the character at given index value
console.log(username.indexOf("n")) // it gives us the index value of given character
console.log(username.charCodeAt("n")) // it gives character code
console.log(username.toUpperCase()) // convert all characters to upperCase
console.log(username.toLowerCase()) //convert all characters to lowerCase
console.log(username.concat(" Singh")) // concatinate a string
console.log(username.includes("l")) // it checks given charachter is present in string or not
console.log(username.trim()) // it removes extra spaces from string
console.log(username.slice(0,3)) // it slice the string to given number, it takes negative values 
console.log(username.substring(0,3)) // it also slice the string but it not take negative values 
console.log(username.split("-")) // it split the string with (space " ", "","-","/", or any char )
console.log(username.valueOf()) // it gives string 
console.log(username.replace("n", "t")) // it replaces the 1st value to 2nd value
console.log(username.replaceAll("s", "z")) // it replace all values but it checks lowercase and uppercase values (case-sensitive)
console.log(username.search("t")) // it search the given value in string and print index of that value



