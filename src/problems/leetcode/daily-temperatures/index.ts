/**
 * Given a list of daily temperatures T, return a list such that for each day in the input, tells you
 * how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible
 * put 0 instead.
 *
 * For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73],
 * your output should be [1,1,4,2,1,1,0,0]
 *
 */

const dailyTemperatures = (t: number[]) => {
  let stack = [];
  for (let i = 0; i < t.length; i++) {
    stack.push(t[i]);
    let j = i + 1;
    let notFound = true;
    while (j < t.length && notFound) {
      if (stack[0] >= t[j]) {
        stack.push(t[j]);
        j++;
      } else {
        notFound = false;
      }
    }
    t[i] = notFound === true ? 0 : stack.length;
    stack = [];
  }
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
dailyTemperatures([1, 1]);
