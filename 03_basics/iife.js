//why we use IIFE: functions wo executes immidiately... there is code to get polluted bcoz of global scope and whatever 
// variables, declarations are present in global scope which polluted to our code so remove that pollution we used IIFE
// we used IIFE for database connect so functions called immidiately after our application or code run.


// (function chai(){
//     console.log("DB CONNECTED")
// })();

// (()=>{
//     console.log("DB CONNECTED")
// })()

// function first() {
//     console.log("First function");
//     second();
//     console.log("Back to First");
//   }
  
//   function second() {
//     console.log("Second function");
//     third();
//   }
  
//   function third() {
//     console.log("Third function");
//   }
  
//   first();

// function a() {
//     console.log("a start");
//     b();
//     console.log("a end");
//   }
  
//   function b() {
//     console.log("b start");
//     c();
//     console.log("b end");
//   }
  
//   function c() {
//     console.log("c here");
//   }
  
//   a();

function countDown(n) {
    if (n === 0) {
      console.log("Done!");
      return;
    }
    console.log(n);
    countDown(n - 1);
  }
  
  countDown(3);

//   function infinite() {
//     return infinite();
//   }
  
//   infinite();
  
function foo() {
    console.log("foo");
    setTimeout(() => {
      console.log("bar");
    }, 0);
    console.log("baz");
  }
  
  foo();