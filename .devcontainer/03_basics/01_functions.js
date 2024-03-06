function sayname(){
    console.log("maggie")
}

// sayname()

function cal1(num1,num2){
    console.log(num1+num2)
}
function cal(num1,num2){
    return num1+num2
}

const result = cal(4,10)
// console.log(result)

function loggedIn(username="User123"){
    if(username==undefined){
        console.log("Please enter you username!!")
        return 
    }else{
        return `${username}, Welcome to google!`
    }
}

// console.log(loggedIn("Rishi"))
// console.log(loggedIn("Hero"))


// the rest operator and spread operator
function calculatePrice(val1, val2,...num1){
    return num1
}
// console.log(calculatePrice(200,300,400,500))

const user={
    username:"rishi",
    price:199
}

function handleuser(anyobject){
    console.log(`${anyobject.username} is the username and price is ${anyobject.price}`)
}
// we are passing an object into the handle object function created above.

// method 1::
// handleuser(user)

// Method 2::
// handleuser({
//     username:"sam",
//     price:201
// })

const arr=[200, 400, 300, 50]
function returnSecond(anyarr){
    console.log(`${anyarr[1]} is the second element of the given array.`)
}
// method1::
// returnSecond(arr)

// method 2::
// returnSecond([10,20,30,40])

function one(){
    const website="google"
    function two(){
        const username = "rishi"
        console.log(website)
    }
    two()
}
// one()

// +++++++++++++++++++++++++++++++++=interesting+++++++++++++++++++++++++++++++++++

// a proper fucntion(addone) can be called from anywhere in the code
// but a variable function(addtwo) can only be called after the declaration of the fucntion
// console.log(addone(5))
// console.log(addtwo(10))
function addone(num){
    return num+1
}

const addtwo=function(num){
    return num+2
}

