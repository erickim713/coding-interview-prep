const kMostFrequent = (nums: number[], k: number): number[] => {
  if (nums.length === 0) {
    return [];
  }

  const newArray = new Array();
  const counterMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (counterMap.get(nums[i]) === undefined) {
      counterMap.set(nums[i], 1);
    } else {
      counterMap.set(nums[i], counterMap.get(nums[i]) + 1);
    }
  }

  counterMap.forEach((value, key) => {
    newArray.push([key, value]);
  });
  newArray.sort((a: number[], b: number[]) => {
    return b[1] - a[1];
  });

  let start = 0,
    end = 0;
  let currentFreq;
  for (let i = 0; i < newArray.length; i++) {
    if (i === 0) {
      currentFreq = newArray[i][1];
    }

    if (currentFreq !== newArray[i][1] || i === newArray.length - 1) {
      if (i === newArray.length - 1 && currentFreq === newArray[i][1]) {
        end++;
      }
      let subArray = newArray.slice(start, end);
      subArray.sort((a, b) => {
        return b[0] - a[0];
      });
      newArray.splice(start, end - start, ...subArray);
      start = end;
      end = end + 1;
      currentFreq = newArray[i][1];
    } else {
      end++;
    }
  }
  let answer = [];
  for (let i = 0; i < k; i++) {
    answer.push(newArray[i][0]);
  }
  return answer;
};

kMostFrequent([1], 1);
kMostFrequent([1, 1, 1, 2, 2, 3], 2);
