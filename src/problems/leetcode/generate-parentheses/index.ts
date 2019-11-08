/**
Given n pairs of parentheses, write a function to generate
all combinations of well-formed parentheses.

For example, given n = 3, a solution set is
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */

const generate_parentheses = (num: number) => {
  let answer: string[] = [];
  recursiveFx(2 * num, '', '(', answer, 0);
  return answer;
}



const recursiveFx = (targetLength: number, currentString: string, input: string, answer: Array<string>, currentOpen: number) => {
  if (input === '(') {
    currentOpen++;
  } else {
    currentOpen--;
  }

  currentString = currentString + input;

  if (currentString.length === targetLength && currentOpen === 0) {
    answer.push(currentString);
    return;
  } else if (currentString.length === targetLength) {
    return;
  }


  if (currentOpen > 0) {
    recursiveFx(targetLength, currentString, ')', answer, currentOpen);
  }
  recursiveFx(targetLength, currentString, '(', answer, currentOpen);
}

console.log(generate_parentheses(1))
console.log(generate_parentheses(2))
console.log(generate_parentheses(3))
console.log(generate_parentheses(4))