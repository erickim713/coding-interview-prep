const valid_perfect_square = (num: number) => {
  if(num === 1) return true;
  let highBase = num, lowBase = 1;
  let midBase = Math.floor((highBase + lowBase) / 2 );
  while(lowBase <= highBase) {
    let squaredResult = midBase * midBase;
    if(squaredResult === num) return true;
    else if ( squaredResult > num) {
      highBase = midBase - 1;
    } else {
      lowBase = midBase + 1;
    }
    midBase = Math.floor((highBase + lowBase) / 2);
  }
  return false;
}

console.log(valid_perfect_square(5));
console.log(valid_perfect_square(15));
console.log(valid_perfect_square(16));
console.log(valid_perfect_square(25));
console.log(valid_perfect_square(55));
console.log(valid_perfect_square(105));
console.log(valid_perfect_square(225));
