
const date = new Date()
// console.log(date);////2025-03-05T11:40:55.415Z
// console.log(date.toString()) //Wed Mar 05 2025 11:39:49 GMT+0000 (Coordinated Universal Time)
// console.log(date.toLocaleString()) //3/5/2025, 11:39:49 AM 
// console.log(date.toDateString())  //Wed Mar 05 2025
// console.log(date.toISOString()); //2025-03-05T11:40:55.415Z
// console.log(date.toJSON()); ////2025-03-05T11:40:55.415Z
// console.log(date.toLocaleDateString()); // 3/5/2025
// console.log(date.toLocaleTimeString());  //11:42:50 AM
// console.log(date.toUTCString()); //Wed, 05 Mar 2025 11:43:16 GMT
// console.log(typeof date)

// const newDate = new Date(2023,0,3)
const newDate = new Date(2023,0,3,15,7)
// console.log(newDate.toLocaleString());


// when in projects there is poll, quizes who give faster poll to make winner at that time it will use.
const myTimeStamp = Date.now()//Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
// console.log(myTimeStamp);  // it gives in milliseconds
// console.log(newDate.getTime()); 
// /*it will convert date in miliseconds so whenever we want to compare or do any operations at that time it will be useful*/

// console.log(Date.now() / 1000); // convert date to seconds but it will gives us decimal value 
// console.log(Math.floor(Date.now() / 1000)); // now we get round value... so here we can use round() method as well

const myDate = new Date()

console.log(myDate.getDate());
console.log(myDate.getHours());
console.log(myDate.getUTCDay());
console.log(myDate.getDay() +1); // gives array value


// imp method we can customize how we want date formats 
console.log(myDate.toLocaleString("default", {
    weekday:"short"
}));





 





