/**
  Given a non empty array of integers, every element appears twice except for one.
  Find that single one

  Note that your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 */

const single_number = (nums: Array<number>) => {

  const dictionary = new Map<number, number>();
  for (const element of nums) {
    const currentCounter = dictionary.get(element);
    if(currentCounter === undefined) {
      dictionary.set(element, 1);
    } else {
      dictionary.set(element, currentCounter + 1);
    }
  }
  let answer;
  dictionary.forEach((value, key) => {
    if(value === 1) {
      answer = key;
    }
  });

  return answer;
}

console.log(single_number([2, 2, 1]));
console.log(single_number([4, 1, 2, 1, 2]));
