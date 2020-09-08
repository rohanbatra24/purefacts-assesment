const isDivisibleBy3 = (str) => {
	const arr = str.split('');

	const sum = arr.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0);

	return sum % 3 === 0;
};

console.log(isDivisibleBy3('10'));
