const binarySearch = (array: number[], target: number ) => {
  let lowIdx = 0, highIdx = array.length - 1;
  while(lowIdx <= highIdx) {
    let midIdx = Math.floor((lowIdx + highIdx) / 2);
    if(target === array[midIdx]) return midIdx;
    else if (array[midIdx] > target) {
      highIdx = midIdx - 1;
    } else {
      lowIdx = midIdx + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 4, 6, 10, 11] , 4));
console.log(binarySearch([1, 2, 4, 6, 10, 11] , 1));
console.log(binarySearch([1, 2, 4, 6, 10, 11] , 7));
console.log(binarySearch([1, 2, 4, 6, 10, 11] , 11));