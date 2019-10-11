const one_away = (input1: string, input2: string) => {
  if(input1.length - input2.length > 1) return false;
  let targetString = input1.length <= input2.length ? input1: input2;
  let comparedString = input1.length <= input2.length ? input2: input1;
  const dictionary = new Map<string, number>();

  for (let index = 0; index < targetString.length; index++) {
    const targetChar = targetString[index];
    dictionary.set(
      targetChar,
      dictionary.get(targetChar) === undefined ? 1 : dictionary.get(targetChar)  + 1
    );
  }

  let diffCounter = 0;
  for (let index = 0; index < comparedString.length; index++) {
    const comparedChar = comparedString[index];
    if(dictionary.get(comparedChar) === undefined || dictionary.get(comparedChar) <= 0) {
      diffCounter++;
    } else {
      dictionary.set( comparedChar, dictionary.get(comparedChar) -1);
    }
  }

  return diffCounter < 2;
}

console.log(one_away('pale', 'ple'))
console.log(one_away('pales', 'pale'))
console.log(one_away('bale', 'ple'))
console.log(one_away('pale', 'bale'))
console.log(one_away('cale', 'bele'))