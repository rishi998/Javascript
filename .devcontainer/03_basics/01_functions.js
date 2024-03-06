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
console.log(loggedIn("Hero"))