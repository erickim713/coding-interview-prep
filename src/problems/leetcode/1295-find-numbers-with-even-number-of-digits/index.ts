const checkEven = (target: number) => {
  return Math.trunc(Math.log10(target)) % 2 === 1;
};

const findNumbers = (nums: number[]) => {
  let counter = 0;

  nums.forEach(value => {
    checkEven(value) ? counter++ : (counter = counter);
  });

  return counter;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
