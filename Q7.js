const fibonacci = (n) => {
	// array to hold series
	const fibonacciSeries = [ 0, 1 ];

	// build fib series
	for (let i = 2; i < n; i++) {
		fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
	}

	console.log(fibonacciSeries);
	return fibonacciSeries[fibonacciSeries.length - 1];
};

console.log(fibonacci(10));
