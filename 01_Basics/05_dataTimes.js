const myDate = new Date()
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

const newDate = new Date(2024, 6, 22, 15, 51)

console.log(newDate.toLocaleString())

let timeStamp = Date.now()

console.log(timeStamp)

console.log(Math.floor(Date.now() / 1000))