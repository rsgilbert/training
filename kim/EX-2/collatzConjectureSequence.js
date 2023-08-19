	// Javascript program to print Collatz sequence starting with 7 and ending with 1
	function printCollatz(number)
	{
		while (number != 1)
		{
			console.log(number + " ");

			if ((number & 1) != 0)
				number  = 3*number + 1;
			else
				number = parseInt(number/2, 10);
        }
		// Print 1 at the end
		console.log(number);
	}

	printCollatz(7);
