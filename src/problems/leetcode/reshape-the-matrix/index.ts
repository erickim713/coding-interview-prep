const checkPossibility = (nums: number[][], r: number, c: number) => {
  return r * c === nums.length * nums[0].length;
};

const matrixReshape = (nums: number[][], r: number, c: number) => {
  let answer = [];
  if (checkPossibility(nums, r, c)) {
    let totalStorage = [];
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums[0].length; j++) {
        totalStorage.push(nums[i][j]);
      }
    }

    for (let i = 0; i < r; i++) {
      let currentRow = [];
      for (let j = 0; j < c; j++) {
        console.log(totalStorage, r * i, j, currentRow);

        currentRow.push(totalStorage[c * i + j]);
      }
      answer.push(currentRow);
    }
    return answer;
  } else {
    return nums;
  }
};

const improvedMatrixReshape = (nums: number[][], r: number, c: number) => {
  if (!checkPossibility(nums, r, c)) return nums;

  let answer: number[][] = [[]];
  let row = 0;
  let col = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[0].length; j++) {
      if (answer[row] === undefined) answer[row] = [];
      answer[row][col] = nums[i][j];
      col++;
      if (col === c) {
        col = 0;
        row++;
      }
    }
  }
  return answer;
};

console.log(improvedMatrixReshape([[1, 2, 3, 4]], 2, 2));
