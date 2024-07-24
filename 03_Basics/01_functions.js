function sum(num1 , num2){
    return num1 + num2
}

console.log(sum(3, 7))

function greetings(username = "Guest") {  //"Guest" is a default parameter
    return `welcome, ${username} `
}

console.log(greetings("jhon"))
console.log(greetings())                                  //returns undefined or default value when we don't pass the arguemnt


