const arr1 = new Array(12, 32, 56, 77)

const myArr = [1, 2, 3, 4, 5]

console.log(arr1)
console.log(myArr)
console.log(typeof myArr)

myArr.push(6)

console.log(myArr)

myArr.pop()
myArr.pop()

console.log(myArr.includes(5))

const cars = ["Toyota", "Ford", "Tata"]
const bikes = ["Yamaha", "Shuzuki", "Harley"]
const vehicle = cars.concat(bikes)

console.log(vehicle)

// array spread operator can take multiple arrys and concate them
const all_vehicles = [...cars, ...bikes]

console.log(all_vehicles)

const arr2 = [1, 2, 3, [4, 5], [6, 7, [8, 9]]]
console.log(arr2.flat(2))

console.log(Array.isArray("Jhon"))
console.log(Array.from("Jhon"))
console.log(Array.from({name: "Jhon"})) // passing objects returns empty array

let result1 = 93
let result2 = 95
let result3 = 97

console.log(Array.of(result1, result2, result3))
