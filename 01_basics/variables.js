const accountId = 45321;
let accountEmail = "john@gmail.com";
var accountPassword = "1212121"
accountCity = "Pune"
let accountState;   // here we declared but not assigned any value so it is "undefined"

 //accountId = 12121;  // it will not allow to change bcoz "accountId" is a constant variable
//let accountEmail = "siri@gmail.com" // Cannot redeclare block-scoped variable 'accountEmail'.

accountEmail = "abc@gmail.com";
accountPassword = "343423";
accountCity = "Mumbai"

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountCity,accountPassword,accountState])