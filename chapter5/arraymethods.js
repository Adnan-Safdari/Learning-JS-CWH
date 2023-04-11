let num = [1, 2, 43, 54, 6];

// toString - converts the array to a string
let b = num.toString();
console.log(b, typeof b);

// Join - changes what joins every value
let c = num.join("_");
console.log(c, typeof c);

// pop - removes the last value from the array  [MODIFIES THE ORIGNAL ARRAY]
let d = num.pop();  // stores the popped value in d
console.log(num, d)

// push - adds a new value to the array at the end of the array [MODIFIES THE ORIGNAL ARRAY]
let e = num.push(500);
console.log(num)

// shift - removes the first element and returns it [MODIFIES THE ORIGNAL ARRAY]
let f = num.shift();
console.log(f)

// unshift - replaces the first element and returns the length of the array [MODIFIES THE ORIGNAL ARRAY]
let g = num.unshift(78);  // g is the new length of the array
console.log(g, num)


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// delete - deletes a specified value of an array [MODIFIES THE ORIGNAL ARRAY]
delete numbers[0];  // It does not affect the length of the array
console.log(numbers)
console.log(numbers.length)

//concat - concatenates two arrays into a new array
let newArray = num.concat(numbers);  // You can add as many arrays as you want: num.concat(arr1, arr2, arr3, arr4);
console.log(newArray);

//sort - sorts alphabetically [MODIFIES THE ORIGNAL ARRAY]
num.sort();
console.log(num)

//sort - ascending [MODIFIES THE ORIGNAL ARRAY]
const compareA = (a, b) => {
    return a + b
}
num.sort(compareA);
console.log(num)

//sort - descending [MODIFIES THE ORIGNAL ARRAY]
const compareD = (a, b) => {
    return b - a
}
num.sort(compareD);
console.log(num)

// reverse - reverses an array [MODIFIES THE ORIGNAL ARRAY]
num.reverse();
console.log(num)

// splice delete and add in middle of the array [MODIFIES THE ORIGNAL ARRAY]
let newNum = [551, 22, 3, 14, 5, 6, 7, 8, 229]
newNum.splice(
    2,  // starting index
    3,  // elements to be deleted
    1022, 1021, 1023, 4502  // new elements that are inserted in the deletation place
)
console.log(newNum)

//slice - stores value after an index in a new array 
let newSliceArr = newNum.slice(3)
console.log(newSliceArr)