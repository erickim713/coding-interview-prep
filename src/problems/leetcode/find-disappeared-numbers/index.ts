/**
 * Given an array of integers where 1 <= a[i] <= n (n = size of array), some elements that appear twice and others appear once
 * find all elements of [1, n] inclusive that do not appear in this array.
 * 
 * Cold you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
 */

const findDisappearedNumbers = (nums: number[]) => {
	// with O(n) space and time complexity i can utilize another array and keep track of what's coming and what's not and then at the end just for loop and 
	// return numbers that have never occured.

	nums = nums.sort((a, b) => { return a - b });
	let result = [];
	let expectedNumber = 1;
	let index = 0;
	while(expectedNumber < nums.length + 1) {
		if(expectedNumber !== nums[index]) {
			if(expectedNumber < nums[index]) {
				result.push(expectedNumber);
				expectedNumber++;
			} else if (expectedNumber > nums[index] && index < nums.length -1) {
				index++;
			} else {
				result.push(expectedNumber);
				expectedNumber++;
			}
		} else {
			expectedNumber++;
			index++;
		}
	}
	return result;
}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
console.log(findDisappearedNumbers([1,1]));


// smarter way of solving this problem

const findDisappearedNumbers2 = (nums: number[]): number[] => {
	let result = [];
	for (let index = 0; index < nums.length; index++) {
		let targetNumber = Math.abs(nums[index]);
		nums[targetNumber - 1] = -(Math.abs(nums[targetNumber - 1]));
	}

	for (let j = 0; j < nums.length; j++) {
		if(nums[j] > 0) result.push(j+1);
	}

	return result;
}

console.log(findDisappearedNumbers2([4,3,2,7,8,2,3,1]));
console.log(findDisappearedNumbers2([1,1]));