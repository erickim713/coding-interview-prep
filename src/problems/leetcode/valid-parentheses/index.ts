const valid_parentheses = (input: string) => {
  const stack: string[] = [];
  const openingParenthesesRef = new Map<string, string>();
  openingParenthesesRef.set('(', ')');
  openingParenthesesRef.set('[', ']');
  openingParenthesesRef.set('{', '}');
  for(let i = 0; i < input.length; i ++) {
    if(openingParenthesesRef.get(input[i]) === undefined) {
      if(stack.length === 0) return false;
      else {
        const peek = stack.pop();
        if(openingParenthesesRef.get(peek) !== input[i]) return false;
      }
    } else {
      stack.push(input[i]);
    }
  }

  return stack.length === 0;
}


console.log(valid_parentheses("()[]{}"));
console.log(valid_parentheses("([)]"));
console.log(valid_parentheses("{[]}"));

console.log(valid_parentheses("(]"));
console.log(valid_parentheses("("));
console.log(valid_parentheses("]"));