//singleton objects

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e",6: "f"}

const obj3 = {...obj1, ...obj2}

const obj4 = Object.assign({}, obj1, obj2)      //(target, source)

console.log(obj3)
console.log(obj4)

const student =[
    {
        Name: {
            FullName: {
                FirstName: "Jhon",
                SecondName: "Doe"
            }
        },
        id: 2313,
        Mail: "JhoneExample@mail.com"
    }
]

console.log(student[0].Name.FullName.FirstName)

console.log(Object.keys(student[0]))
console.log(Object.values(student[0]))


//object de-structure

const employee = {
    employeeName: "Jhon J",
    id: 3244,
}

const {employeeName : name} = employee
console.log(name)


