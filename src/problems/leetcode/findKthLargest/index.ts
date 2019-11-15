const findKthLargest = (nums: number[], k: number) => {
  nums.sort((a, b) => {
    return b - a;
  });
  return nums[k - 1];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));