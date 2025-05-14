const user = {
    username:"snehal",
    age:28,
    welcomeMessage:function(){
        console.log(`${this.username}, please welcome`)
        console.log(this)
    }
}
// this reffers to current context 

// user.welcomeMessage()
// user.username = "Ravi"
// user.welcomeMessage() // here context changet to Ravi so this reffers to current context here i.e. Ravi

// console.log(this) getting empty object in node engine

// in browsers engine we are getting window global object



// function one(){
//     const name = "Snehal"
//     console.log(this.name)  // undefined we can not access this in functions. it accessible in objects
// }

// one()

// there are two way to return value in arrow function
// const one = ()=>{
//     return "snehal"
// }  // explicitly return with {}

// const one = ()=> "snehal" // implicit return
// const one = ()=> ("snehal")
const one = ()=> ({username:"snehal"}) // when we write objects 
console.log(one())