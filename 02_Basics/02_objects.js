const mySym = Symbol("Symbol 1")

//object literals
const student1 = {
    Name: 'Jhon',
    "Full Name" : "Jhon Doe",
    [mySym] : "mySymbol 1",
    Age: 21,
    Email: 'JhonExample@gmail.com',
    Address: '1st cross street, sector 138',
}

console.log(student1.Name)
console.log(student1["Full Name"])
console.log(student1[mySym])

//Prevent object modification
//Object.freeze(student1)

student1.Age = 18

console.log(student1)

student1.myFun = function() {
    console.log(`Hello from my ${this.Name}`)
}

console.log(student1.myFun())
