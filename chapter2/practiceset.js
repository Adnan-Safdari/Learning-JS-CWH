// Chapter 2 Practice set

// Problem 1 

let age = prompt("Enter your age: ");

if (age > 10 && age < 20) {
    console.log("Between 10-20 years old.");
}

else {
    console.log("Not between 10-20 years old.");
}


// Problem 2

let number = prompt("Enter a number: ");
number = Number.parseInt(number)

switch (number) {
	case 50:
		console.log("Number is 50.");
		break;

	case 100:
		console.log("Number is 100.");
		break;
    
    default:
        console.log("Not a 50 or 100 number.");
        break;
}

// Problem 5
let a = age>18 ? "You can drive" : "You can't drive.";
console.log(a)

