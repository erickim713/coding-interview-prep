/**
 * 
 * Given an array nums, write a function to move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements
 * 
 * read the QUESTION CAREFULLY, while maintaing the relative order of the non-zero elements.
 * 
 * you must do this in place without making a copy of the array
 * minimize the total number of operations
 */

const moveZeroes = (nums: number[]) => {
	let count = 0;
	for(let i = 0; i < nums.length; i++){
			if(nums[i] != 0){
					nums[count++] = nums[i];
			}
	}
	while(count < nums.length){
			nums[count++] = 0;
	}
	return nums
}

console.log(moveZeroes([0,12,0,3,1]));
