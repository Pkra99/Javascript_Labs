//for loop
//Printing tables

for (let i = 1; i <= 10; i++) {
    console.log()
    console.log("Table of:" + i)
    console.log()
    for(let j = 1; j <= 10; j++) {
        console.log(i + "*" + j + "=" + i*j);
    }
}

//forOf loop

const nums = [1, 2, 3, 5, 6]

for(const num of nums) {
    console.log(num)
}

const str = "ForOfLoop"

for (const char of str){
    console.log(char)
}

const myMap = new Map()
myMap.set('Name', 'Jhon')
myMap.set('Country', 'US')
myMap.set('Course', 'CS')

for (const [key, value] of myMap) {
    console.log(key + ":- " + value)
}

//forOf loop can be only used with the iterable and can not be used with objects

//forIn loop

const car = {
    'Brand': 'Toyota',
    'Model': 'Legender',
    'Price': '$9999'
}

for(const cars in car) {
    console.log(`${cars} : ${car[cars]}`)
}

//using forIn loop with arrays

const languages = ['Javascript', 'java', 'c++']

for(const language in languages){
    console.log(languages[language])
}

//forEach loop

const skills = ['Frot-end', 'Back-end', 'Full-stack']

//skills.forEach(function (skill) {
//    console.log(skill)
//} )

//function printArray(skill) {
//    console.log(skill)
//}
//skills.forEach(printArray)

//skills.forEach( (skill) => {
//    console.log(skill)
//} )

skills.forEach((skill, index, skills)=> {
    console.log(skill, index, skills)
})

const development = [
    {
        'Front-end': 'Request',
        'language': 'HTML, Javascript'
    },

    {
        'Back-end': 'Response',
        'language': 'Spring, NodeJS, Django'
    },

    {
        'databases': 'CURD Operations',
        'language': 'mysql, mongoDB'
    }
]

development.forEach( (item)=> {
    console.log(item.language)
})