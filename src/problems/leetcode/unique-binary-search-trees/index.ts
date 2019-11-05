/**
 * Given n, how many structureall unique BST's (binary search tress that store values 1... n?)
 *
 * Example:
 * input: 3
 * output: 5
 * Explanation: Given n = 3 threre are total of 5 unique BSTs
 */

const numTrees = (n: number) => {
  let storage = new Array(n);
  storage[0] = 1;
  storage[1] = 1;
  storage[2] = 2;

  let counter = 3;
  while (counter <= n) {
    let firstpointer = 0;
    let lastpointer = counter;
    let sum = 0;
    for (let i = 0; i < counter; i++) {
      sum = sum + storage[firstpointer] * storage[lastpointer - 1];
      firstpointer++;
      lastpointer--;
    }
    storage[counter] = sum;
    counter++;
  }

  return storage[n];
};

console.log(numTrees(1));
console.log(numTrees(2));
console.log(numTrees(3));
console.log(numTrees(4));
console.log(numTrees(5));
