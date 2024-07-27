// Truthy values

//true, "0", " ", "false", [], {}, function() {}

// Falsy values

// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

//checking array emptiness

const arr1 = []

if(arr1.length === 0){
    console.log("Empty array")
} else{
    console.log("Not an empty array")
}

//checking object emptiness

const obj1 = {name : "Jhon"}

if (Object.keys(obj1).length === 0) {
    console.log("Empty object")
} else {
    console.log("Not an empty object")
}

// Nulllish coalescing operator (??)

let val1;
// val1 = 5 ?? 10  output: 5
//val1 = null ?? 10  output : 10
//val1 = undefined ?? 15
val1 = null ?? 5 ?? 10
console.log(val1)