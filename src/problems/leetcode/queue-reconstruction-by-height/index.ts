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
    return a[0] - b[0];
  });

  //after sorting there must be another sorting by second element sorted by subarrays the smaller values of the second
  //element must come first.

  let start = 0,
    end = 0;
  let currentFreq;

  for (let i = 0; i < people.length; i++) {
    if (i === 0) {
      currentFreq = people[i][0];
    }

    if (i === people.length - 1 || currentFreq !== people[i][0]) {
      if (i === people.length - 1) i++;
      let subArray = people.slice(start, i);
      subArray.sort((a, b) => {
        return b[1] - a[1];
      });

      if (subArray.length !== 1) people.splice(start, i - start, ...subArray);
      start = i;
      end = i;
      if (i !== people.length) {
        currentFreq = people[i][0];
      }
    } else {
      end++;
    }
  }

  const newArray = new Array(people.length);
  for (let i = 0; i < people.length; i++) {
    let counter = people[i][1];
    let index = 0;
    while (true) {
      if (newArray[index] === undefined) {
        if (counter === 0) {
          break;
        } else {
          counter--;
          index++;
        }
      } else {
        index++;
      }
    }

    newArray[index] = people[i];
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
