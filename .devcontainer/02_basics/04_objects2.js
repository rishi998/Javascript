const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="sam"
tinderuser.email="email@email.com"
const regularuser={
    email:"rishi@rishi",
    fullname:{
        userfullname:{
            fname:"rishi",
            lname:"mehto"
        }
    }
}
// console.log(regularuser)
// console.log(regularuser.fullname.userfullname.lname)

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
// const obj3={...obj1,...obj2}
const obj3=Object.assign(obj1,obj2)
// console.log(obj3)

const course = {
    coursename:"js",
    price:"999",
    courseinstructor:"hitesh"
}

// destructuring a value from the object so that we do not need to write course. again and again
const {courseinstructor}=course
console.log(course.courseinstructor)

// javascript object notation : JSON (file format)
{
    "name": "rishi",
    "course":"js in hindi",
    "price":"300"
}
console.log(name)