const validMountainArray = (A: number[]) => {
  if (A.length < 3) {
    return false;
  }

  let hasBeenIncreasing = false;
  let hasBeenDecreasing = false;
  let increasing = false;
  let decreasing = false;
  let current = A[1];
  if (A[0] >= A[1]) {
    return false;
  } else {
    increasing = true;
    hasBeenIncreasing = true;
  }

  for (let i = 2; i < A.length; i++) {
    if (A[i] > current && increasing && hasBeenIncreasing) {
      current = A[i];
    } else if (A[i] < current && increasing && !hasBeenDecreasing) {
      hasBeenDecreasing = true;
      decreasing = true;
      increasing = false;
      current = A[i];
    } else if (A[i] < current) {
      current = A[i];
    } else {
      return false;
    }
  }
  return hasBeenDecreasing && hasBeenDecreasing;
};

console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
