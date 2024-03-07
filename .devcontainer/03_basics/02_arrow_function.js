const user={
    username:"Rishi",
    price:99,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to the website!!`)
    }
}
// this keyword works only inside an object in the scope
// user.welcomeMessage()
user.username="sam"
// console.log(user.welcomeMessage())

// arrow function
// implicit return 
const  addtwo=(num1, num2)=>(num1+num2) 

// explicit return 
const addtone(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(4,4))



