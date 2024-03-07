// for of
const arr=[1,2,3,4,5]
for (const it of arr) {
    // console.log(it)
}
const map=new Map()
map.set('IN',"india")
map.set('UAE',"United arab emirates")
map.set('FR',"france")

// console.log(map)
// forof loop on a map
for (const [it,value] of map) {
    // console.log(it,':- value')
}

// forof loop on an object
const myobject={
    game1:"cricket",
    game2:"football"
}

for (const key in myobject) {
    console.log(key,' :- ', `${myobject[key]}`)
}