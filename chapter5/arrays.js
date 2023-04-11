let marks = [82, 56, 51, 89, false, "Absent"];


marks[6] = 68;  // Adding more marks to the array
marks[0] = 92;  // CHanging marks of an array


for (const element of marks) {
    console.log(element);
}
console.log(typeof marks)  // Arrays are an object