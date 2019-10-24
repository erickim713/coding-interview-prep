const word_ending_game = (n: number, words: string[]) => {
  let wrongIndex = 0;
  let lastLetter: string;
  const wordTrash = new Map<string, number>();

  for(let i = 0; i < words.length; i++) {
    const word = words[i];
    if(i === 0 ) {
      lastLetter = word[word.length - 1];
    } else {
      if(word[0] !== lastLetter || wordTrash.get(word) !== undefined) {
        wrongIndex = i;
        break;
      } else {
        lastLetter = word[word.length - 1];
      }
    }
    wordTrash.set(word, 1);
  }

  return [wrongIndex === 0 ? 0 : (wrongIndex % n) + 1, wrongIndex === 0 ? 0 : Math.ceil((wrongIndex + 1)/ n) ]
}

console.log(word_ending_game(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']));
console.log(word_ending_game(2, ['hello', 'one', 'even', 'never', 'row', 'world', 'draw']))