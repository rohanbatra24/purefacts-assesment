const isStraightLine = (arr) => {
	// find slope between first 2 points

	const slope = arr[1][1] - arr[0][1] / arr[1][0] - arr[0][0];

	console.log('slope', slope);

	// check if all other points have the same slope

	for (let i = 2; i < arr.length; i++) {
		if (arr[i][1] - arr[i - 1][1] / arr[i][0] - arr[i - 1][0] !== slope) {
			return false;
		}
	}

	return true;
};

console.log(isStraightLine([ [ 1, 1 ], [ 2, 2 ], [ 3, 4 ], [ 4, 5 ], [ 5, 6 ], [ 7, 7 ] ]));
