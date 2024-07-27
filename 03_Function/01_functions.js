function sum(num1 , num2){
    return num1 + num2
}

console.log(sum(3, 7))

function greetings(username = "Guest") {  //"Guest" is a default parameter
    return `welcome, ${username} `
}

console.log(greetings("jhon"))
console.log(greetings())                          //returns undefined or default value when we don't pass the arguemnt

//passing object to the function

const user = {
    name: "Alice",
    id: 1231
}

function welcomMessage(user) {
    console.log(`Hello, ${user.name} your userid is ${user.id}`)
}

welcomMessage(user)

welcomMessage({
    name : "Jhon",
    id: 2132
})

//passing array to the function

const myArr = [100, 200, 300]

function arrFirstValue(arr) {
    return arr[0]
}

console.log(arrFirstValue(myArr))

const result = function addTwoNumber(num1, num2){
    return num1 + num2
}

console.log(sum(10, 20))


