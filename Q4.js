// Approach 1
const isPalindrome = (str) => {
	return str === str.split('').reverse().join('');
};
