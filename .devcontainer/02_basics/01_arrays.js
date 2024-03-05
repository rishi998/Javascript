// array
const myarr=[1,2,3,4,5,6,7]

const myarr2=new Array(1,2,3,4)

// array methods

myarr2.push(5)
// console.log(myarr2)

myarr2.pop()
// console.log(myarr2)

myarr2.unshift(10)
myarr2.shift()
// console.log(myarr2)
// we dont use unshift as it adds value in the beginning of the array and all the elements shifted towards right created a load on cpu

// includes fucntion gives true or false
// console.log(myarr2.includes(4))

// consverting an array into string
const newarr=myarr2.join()
// console.log(typeof(newarr))

// slice, splice
const a1=myarr2.slice(1,3)
console.log(a1)
console.log(myarr2)

const a2=myarr2.splice(1,3)
console.log(a2)
console.log(myarr2)

// slice does not manupulate the original Array
// splice manupulates the original array


