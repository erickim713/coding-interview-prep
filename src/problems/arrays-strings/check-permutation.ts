const solution = (inputString1: string, inputString2: string) => {
  if(inputString1.length !== inputString2.length) return false;
  const dictionaryMap = new Map<string, number>();

  for (let i = 0; i < inputString1.length; i++) {
    const char = inputString1[i];
    if(dictionaryMap.get(char) === undefined) {
      dictionaryMap.set(char, 1);
    } else {
      dictionaryMap.set(char, dictionaryMap.get(char)! + 1);
    }
  }

  for(let j = 0; j < inputString2.length; j++) {
    const char = inputString2[j];
    if(dictionaryMap.get(char) !== undefined) {
      if(dictionaryMap.get(char) === 1) {
        dictionaryMap.delete(char);
      } else {
        dictionaryMap.set(char, dictionaryMap.get(char)! - 1) ;
      }
    } else {
      return false;
    }
  }

  return dictionaryMap.entries.length === 0;
}