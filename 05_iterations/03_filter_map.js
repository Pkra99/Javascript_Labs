const student = [
    {
        Name: 'jhon', course: 'CS', semester: 3
    },
    {
        Name: 'Alice', course: 'Marketing', semester: 3
    },
    {
        Name: 'jack', course: 'Marketing', semester: 6
    },
    {
        Name: 'Alita', course: 'Financing', semester: 3
    },
    {
        Name: 'Justin', course: 'CS', semester: 6
    },
    {
        Name: 'jhonny', course: 'CS', semester: 3
    }
]

const thirdSemCsStudents = student.filter( (stu)=> stu.course === 'CS' && stu.semester === 3)

const sixthSemStudent = student.filter( (stu)=> { return stu.semester === 6})

console.log("Third semester CS students details: ", thirdSemCsStudents)
console.log("Sixth semester students details: ", sixthSemStudent)

const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

//const newNums = nums.map( (num)=> { return num + 1})

const newNums = nums
    .map( (num)=> { return num + 1})
    .map( (num)=> { return num + 4})
    .filter( (num)=> num % 3 == 0)
console.log(newNums)