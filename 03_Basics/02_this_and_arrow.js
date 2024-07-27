const student = {
    name : "Jhon",
    age: 21,
    course: "CSE",
    Details : function () {
        console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`)
    }
}

student.Details()
student.name = "ALice"
student.Details()

console.log(this)  //returns empty object

//Arrow function () => { }

const addTwoNum = (num1, num2) => {
    return num1 + num2
}

console.log(addTwoNum(2, 8))

//implicit return

const addThreeNum = (num1, num2, num3) => num1 + num2 + num3
//const addThreeNum = (num1, num2, num3) => (num1 + num2 + num3)
//const addThreeNum = (num1, num2, num3) => ({student.name}) //can be helpful when dealing with the object

console.log(addThreeNum(2, 6, 2))
