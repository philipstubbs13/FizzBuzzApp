//Write a script that prints the numbers 1 to 100 in the console. 
//But for multiples of three, print Fizz instead of the number. 
//For multiples of five, print Buzz. 
//For numbers which are multiples of both three and five, print FizzBuzz.

//Loop through each number from 1 to 100.
for (var i=1; i < 101; i++) {

	//If number is multiple of 5 (i divided by 5 has a remainder of 0) and is multiple of 3 (i divided by 3 has a remainder of 0), log FizzBuzz to the console.
	if ((i % 5 === 0) && (i % 3 === 0)) {
		console.log("FizzBuzz");
	}

	//else if number is multiple of 5 (i divided by 5 has a remainder of 0), log Buzz to the console.
	else if (i % 5 === 0) {
		console.log("Buzz");
	}

	//else if number is multiple of 3 (i divided by 3 has a remainder of 0), log Fizz to the console.
	else if (i % 3 === 0) {
		console.log("Fizz");
	}

	//else, log the number to the console.
	else {
		console.log(i);
	}
}