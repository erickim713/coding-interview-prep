const uniqueCharacters = (input: string): boolean => {
  const dictionary = new Map<string, boolean>();
  for (let i = 0; i < input.length; i++) {
    if (typeof dictionary.get(input[i]) !== 'undefined' || dictionary.get(input[i]) === true) {
      return false;
    } else {
      dictionary.set(input[i], true);
    }
  }

  return true;
}