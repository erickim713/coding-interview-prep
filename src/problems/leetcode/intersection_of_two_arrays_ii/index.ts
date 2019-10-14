const intersection_two_arrays_ii = (nums1: Array<number>, nums2: Array<number>) : Array<number> => {
  const dictionary = new Map<number, number>();
  nums1.forEach((element) => {
    if(dictionary.get(element) === undefined) dictionary.set(element, 1);
    else {
      dictionary.set(element, dictionary.get(element)! + 1);
    }
  });

  let answer: Array<number> = [];
  nums2.forEach((element) => {
    if(dictionary.get(element) !== undefined && dictionary.get(element)! > 0) {
      dictionary.set(element, dictionary.get(element)! - 1);
      answer.push(element);
    }
  });

  return answer;
}

console.log(intersection_two_arrays_ii(
  [1,2,2,1],
  [2]
));

console.log(intersection_two_arrays_ii(
  [4,9,5],
  [9,4,9,8,4]
));

