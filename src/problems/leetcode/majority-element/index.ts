/**
 * Given an array of size n, find the majority element. The majority element that appears
 * more than Math.floor(n/2) times
 * 
 * You may assume that the array is non-empty and majority element always exist in the array.
 * 
 */

const majorityElement = (nums: Array<number>) => {
	const counter = new Map<number, number>();

	nums.forEach(element => {
	  if(counter.has(element)) {
			const currentCount = counter.get(element);
			counter.set(element, currentCount + 1);
		} else {
			counter.set(element, 1);
		}
	});

	const keys = counter.keys();
	let answer = null;
	let max: number = 0;
	while(true) {
		const key = keys.next().value;
		if(key === undefined) break;
		const count = counter.get(key);
		if(count > max) {
			max = count;
			answer = key;
		}
	}
	return answer;
}

console.log(majorityElement([3,2,3]))