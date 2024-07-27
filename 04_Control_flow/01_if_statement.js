if(true) {
    console.log("Hello world")
}

const result = function () {
    let score = 75
    
    if(score <= 40 ){
        console.log("Grade: D")
    } else if(score <= 60) {
        console.log("Grade: C")
    } else if(score <= 75) {
        console.log("Grade: B")
    } else {
        console.log("Grade: A")
    }
}

result()

const welcomeScreen = function (username) {
    let isLoggedIN = true
    let isEmployee = true
    
    if(isEmployee && isEmployee) {
        console.log(`Welcome back, ${username}`)
    }
}

welcomeScreen("Jhon")

const logginInfo = function () {
    let isloggedInFromGmail = true
    let isloggedInFromFacebook = false
    
    if(isloggedInFromGmail || isloggedInFromFacebook) {
        console.log("Logged in sucessfully")
    }
}

logginInfo()

//terniary operator
//condition ? ture : false

const num = 40
    num <= 50 ? console.log("Less than 50") : console.log("More than 50")