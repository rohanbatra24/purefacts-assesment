const printNums = () => {
	for (let i = 200; i < 1000; i++) {
		if (i % 9 === 0 && i % 20 !== 0) {
			console.log(i);
		}
	}
};

printNums();
