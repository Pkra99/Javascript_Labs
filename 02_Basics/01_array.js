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