const mergeSort = (array:number[]) => {
  const helperArray = new Array(array.length);
  sort(array, helperArray, 0, array.length -1);
}

const sort = (array: number[], helperArray: number[], lowIdx: number, highIdx: number) => {
  if(lowIdx < highIdx) {
    const midIdx = Math.floor((lowIdx + highIdx) /2);
    sort(array, helperArray, lowIdx, midIdx);
    sort(array, helperArray, midIdx + 1, highIdx);
    merge(array, helperArray, lowIdx, midIdx, highIdx);
  }
}

const merge = (array: number[], helperArray: number[], lowIdx: number, midIdx: number, highIdx: number) => {
  let currentIdx = lowIdx, leftIdx = lowIdx, rightIdx = midIdx + 1;
  while(leftIdx <= midIdx && rightIdx <= highIdx) {
    if(array[leftIdx] < array[rightIdx]) {
      helperArray[currentIdx] = array[leftIdx];
      leftIdx++;
    } else {
      helperArray[currentIdx] = array[rightIdx];
      rightIdx++;
    }
    currentIdx++;
  }
}