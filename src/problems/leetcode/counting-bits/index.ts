const countBits = (num: number): number[] => {
  let answer = [0, 1];
  if (num === 0) return [0];
  if (num === 1) return answer;
  let currentPower = 0;
  for (let i = 2; i <= num; i++) {
    if (isPowerOfTwo(i)) {
      currentPower++;
      answer.push(1);
    } else {
      answer.push(
        answer[Math.pow(2, currentPower)] +
          answer[i - Math.pow(2, currentPower)],
      );
    }
  }
  return answer;
};

// how to check if it's power of 2
const isPowerOfTwo = (num: number): boolean => {
  while (num % 2 === 0) {
    num = num / 2;
  }
  return num === 1;
};
