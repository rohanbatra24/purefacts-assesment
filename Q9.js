const strDivision = (str1, str2) => {
	i = 0;
	while (
		i < str2.length &&
		str1.charAt(i) === str2.charAt(i) &&
		str1.substring(str1.length - 1 - i, str1.length) === str2.substring(str2.length - 1 - i, str2.length)
	) {
		i++;
		console.log('i', i);
	}

	if (str1.length / 2 === str1.substring(0, i - 1).length || str2.length / 2 === str2.substring(0, i - 1).length) {
		return str1.substring(0, Math.ceil(i + 1 - str1.length / 2));
	}
	else return str1.substring(0, i);
};

console.log(strDivision('ABCDEF', 'ABC'));
