// Chapter 5 practice set 

// Question - 1
{
    let myArray = [];  // creating an empty array
    userInput = prompt("Enter element to add to the array: ");  // taking input from the user
    for (let i of userInput) {
        myArray.push(i);  // adding elements to the array
    };

    console.log(myArray)

}

// Question - 2
{
    let myArray = [1, 2, 3, 4, 5, 6, 7, 8]; // creating an array with elements

    let userInput;
    do {
        userInput = prompt("Enter a number: "); // taking input from the user
        userInput = Number.parseInt(userInput); // Converting the string into number
        myArray.push(userInput); // adding elements to the array
    } while (userInput != 0);  // checking if number 0 is inputed my user. This is just a breakpoint to end loop
    console.log(myArray);

}

// Question - 4
{
    let myArray = [1, 2, 3, 4, 5, 6, 7];
    let newarr = [];
    for (let i of myArray) {
        newarr.push(i*i);
    }
    console.log(newarr);
}