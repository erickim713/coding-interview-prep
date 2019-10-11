/**
Given a string, write a function to check if it's a permutation of a palindrome.
A palindrome is a word that is the same forwards and backward
A permutation is a rearrangment of letters. The palindrome does not need to be
limited to just dictionary words
 */

 const palindrome_permutation = (input: string) => {
   const map = new Map<string, number>();
   input = input.toLowerCase();
   for (let index = 0; index < input.length; index++) {
     const character = input[index];
     if(character === ' ') continue;
     else {
       if(map.get(character) === undefined) {
         map.set(character, 1);
       } else {
         map.delete(character)
       }
     }
   }
   return map.size < 2;
 }

 console.log(palindrome_permutation('Tact Coa'));
 console.log(palindrome_permutation('b'));
 console.log(palindrome_permutation('boobse'));