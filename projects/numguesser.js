// Starting 
console.log("Welcome to the Number Guessing Game!\n\n");
console.log("I am thinking of a number between 1 and 100\n");

// Generating a random answer
answer = Math.floor(Math.random() * 100) + 1;  // Returns a random integer from 1 to 100:

// Creating the core game
const game = (answer, attempts) => {

    do {
        console.log(`You have ${attempts} attempts remaining to guess the number`)  // printing the remaining attempts
        let userInput = prompt("Enter a number: ");
        console.log("\n")
        userInput = Number.parseInt(userInput);  // converting string to number

        if (userInput != answer) {
            // printing if the actual answer is greater or lower than the user's input
            console.log(`The answer is ${(answer > userInput) ? 'greater' : 'lower'} than ${userInput}\n`);
            attempts--;  // reducing one chance for wrong attempt
        }

        else if (userInput === answer) {
            attempts = -5; // making the attempts -5 to preventing the system to think you have failed
        }
    } while (attempts > 0);

    if (attempts == -5) {
        console.log("Congratulations! You have guessed the number!!")
    }

    else {
        console.log("You failed to guess the number ): \n The correct answer was ", answer);
    }
}

// Setting the number of attempts for the user
difficultyLevel = prompt("Choose a level: 'normal' or 'hard'").toLowerCase();

if (difficultyLevel == "hard") {
    game(answer = answer, attempts = 5);
}

// using an `else` for normal mode so incase user inputs something else or makes a typo, the default is Normal Mode
else {
    game(answer = answer, attempts = 10);
}
