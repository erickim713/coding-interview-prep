/**
  Say you have an array for which the 'i'th element is the price of a given stock on day i

  If you were only permitted to complete at most one transaction (buy one and sell one share of the
  stock ) design an algorithm to find the maximum profit
 */

const best_time_to_buy_and_sell_stock = (nums: Array<number>) => {
  let min = 10000000, max = 0;
  for(let i =0 ;i<nums.length; i++) {
    if(nums[i] < min) {
      min = nums[i];
    } else {
      max = Math.max(max, nums[i]- min);
    }
  }
  return max;
}


console.log(best_time_to_buy_and_sell_stock([7,6,4,3,1]));
console.log(best_time_to_buy_and_sell_stock([7,1,5,3,6,4]));