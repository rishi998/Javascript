// singleton

// object literals
const mysim=Symbol("44")
const user={
    // [mysim]:"rishhh",
    name : "Rishi",
    age:"22",
    location:"delhi",
    email:"rishi@google.com",
    isloggedin:false
}
// console.log(user.email)
// console.log(user["email"])

// [mysim]="rishhh"
// console.log(typeof mysim)

// freezing the object
// Object.freeze(user)
user.email="rishi@uber.com"

// console.log(user)

user.greeting=function(){
    console.log("Hello JS user")
}
// console.log(user.greeting())

user.greeting2=function(){
    console.log("Hello js user, ${this.name}")
}

console.log(user.greeting2())