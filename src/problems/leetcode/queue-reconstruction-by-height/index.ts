/**
 *
 * Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k) where h is the height
 * of the person and k is the number of people in front of this person who have height greater than or equal to h. Write an algorithm to reconstruct
 * the queue.
 *
 * Note: the number of people is less than 1,100
 */

const reconstructorQueue = (people: number[][]) => {
  if (people.length === 0) {
    return people;
  }
  // first sort the array based on the person first, which is the height
  // then do a for loop on the sorted people array and insert it based on the second element which
  // is number of people in front of him or her.
  people = people.sort((a, b) => {
    return b[0] - a[0];
  });

  //after sorting there must be another sorting by second element sorted by subarrays the smaller values of the second
  //element must come first.
  let current = people[0][0];
  let counter = 1;
  for (let i = 1; i < people.length; i++) {
    if (current === people[i][0]) {
      counter++;
    }

    if (people[i + 1] !== undefined && people[i + 1][0] !== current) {
      let subArray = people.slice(i - counter + 1, i + 1);
      subArray = subArray.sort((a, b) => {
        return a[1] - b[1];
      });
      for (let j = 0; j < counter; j++) {
        people[i - counter + 1 + j] = subArray[j];
      }
      if (people[i + 1] !== undefined) {
        current = people[i + 1][0];
        counter = 1;
        i++;
      }
    }

    if (people[i + 1] === undefined) {
      let subArray = people.slice(i - counter + 1, i + 1);
      subArray = subArray.sort((a, b) => {
        return a[1] - b[1];
      });
      for (let j = 0; j < counter; j++) {
        people[i - counter + 1 + j] = subArray[j];
      }
    }
  }

  const newArray = new Array();
  for (let i = 0; i < people.length; i++) {
    newArray.splice(people[i][1], 0, people[i]);
  }
  return newArray;
};

const example = [
  [8, 2],
  [4, 2],
  [4, 5],
  [2, 0],
  [7, 2],
  [1, 4],
  [9, 1],
  [3, 1],
  [9, 0],
  [1, 0],
];

console.log(reconstructorQueue(example));
