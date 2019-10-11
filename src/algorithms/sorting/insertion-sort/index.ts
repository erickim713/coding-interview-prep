const insertionSort = (array: number[]) => {
  for(let i = 1; i < array.length; i ++) {
    let currentValue = array[i];
    let j = i -1;
    while(j >= 0) {
      console.log({i, j, currentValue, array})
      if(array[j] > currentValue) {
        array[j + 1] =  array[j];
        j--
      } else {
        array[j] = currentValue;
        break;
      }
    }
    if(j == -1 ) array[j + 1] = currentValue;
  }
  return array;
}

console.log(insertionSort([4,2,1,7, 3]));
