/**
Search insert position
given a sorted array and a target value, return the index if the target is found
if not return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.
 */
const searchInsertLinearSearch = (nums: number[], target: number) => {
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === target) return i;
    if(nums[i] < target) continue;
    else { return i };
  }

  return nums.length;
}

console.log(searchInsertLinearSearch([1,2,5,6], 5));
console.log(searchInsertLinearSearch([1,2,5,6], 2));
console.log(searchInsertLinearSearch([1,2,5,6], 7));
console.log(searchInsertLinearSearch([1,3,5,6], 0));


// since it's sorted i think i can make this better by using binary search

const searchInsertBinarySearch = (nums: number[], target: number) => {
  let lowIdx = 0, highIdx = nums.length - 1;
  while (lowIdx <= highIdx) {
    let middle = Math.floor((lowIdx + highIdx)  / 2);
    if(nums[middle] === target) {
      return middle;
    }
    if(nums[middle] > target) {
      highIdx = middle - 1;
    } else {
      lowIdx = middle + 1;
    }
  }
  return Math.ceil((lowIdx + highIdx) / 2);
}

console.log(searchInsertBinarySearch([1,2,5,6], 5));
console.log(searchInsertBinarySearch([1,2,5,6], 2));
console.log(searchInsertBinarySearch([1,2,5,6], 3));
console.log(searchInsertBinarySearch([1,3,5,6], 0));
console.log(searchInsertBinarySearch([1,2,5,6], 8));


console.log(searchInsertBinarySearch([1,2,5,6, 7], 5));
console.log(searchInsertBinarySearch([1,2,5,6, 7], 2));
console.log(searchInsertBinarySearch([1,2,5,6, 7], 3));
console.log(searchInsertBinarySearch([1,3,5,6, 7], 0));
console.log(searchInsertBinarySearch([1,2,5,6, 7], 8));
