const letterCombinations = (input: string) => {
  if (input.length === 0) return [];
  const reference = [[], [],
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z'],
  ];

  let result = reference[parseInt(input[0])];
  for (let i = 1; i < input.length; i++) {
    const nextRow: string[] = [];
    reference[parseInt(input[i])].forEach((characterToBeAdded) => {
      result.forEach((charactersSoFar) => {
        nextRow.push(charactersSoFar + characterToBeAdded);
      });
    });

    result = nextRow;
  }
  return result;
}


console.log(letterCombinations('3742'));

