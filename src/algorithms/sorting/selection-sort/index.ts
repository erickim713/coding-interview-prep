const selectionSort = (array: number[]) => {
  for(let i = 0; i < array.length -1; i++) {
    let minimum = array[i];
    let minimumValueIndex = i;
    for(let j = i + 1; j < array.length; j++) {
      if(minimum > array[j]) {
        minimum = array[j];
        minimumValueIndex = j;
      }
    }
    array[minimumValueIndex] = array[i];
    array[i] = minimum;
  }
  return array;
}