const ta=[1,2,3,4,5]
const tb=[6,7,8,9,10]
// const tc=tb.concat(ta)
// console.log(tc)

// the spread operator
const tc=[...ta,...tb]
// console.log(tc)

const arr=[1,2,3,[4,5,6,[6,7,8,[9,10],11,12],13],14,15,16,17]
const arr34=arr.flat(Infinity)
console.log(arr34)