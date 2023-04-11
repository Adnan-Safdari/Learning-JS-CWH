let num = [3, 54, 4, 5, 6, 7]

// Normal for loop
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

// For each loop
num.forEach((element) => {
    console.log(element);
})

// Array.from
let name = "Harry";
let strArr = Array.from(name)
console.log(strArr)

// map() Creates new array by performing some operations on each element of the array   
let a = num.map((value) => {
    console.log(value);
    return value + 1;
})
console.log("map:", a)
