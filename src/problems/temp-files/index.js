// K 번째 수

function solution(array, commands) {
    const answer = [];
    commands.map(function(command) {
        returnoperation(array, command[0], command[1], command[2]);
    });
    return answer;
}

function operation(inputArray, i, j, k) {
  const partialArray = inputArray.slice(i-1, j);
  const sortedPartialArray = partialArray.sort(); // 여기서 sort 함수 안에 comparison function 이 안들어가면 테스트가 하나가 통과가 안됌.
  return sortedPartialArray.slice(k-1, k)[0];
}


// 체육복 문제 테스트 3, 7, 12 안됌..
function solution(n, lost, reserve) {
    const clothAvailable = n - lost.length;
    const reserveClothing = new Map();
    reserve.forEach((cloth) => {
        reserveClothing.set(cloth, true);
    });
    let additionalCount = 0;
    lost.forEach((lostOnes) => {
        if(reserveClothing.get(lostOnes-1) === true) {
            reserveClothing.set(lostOnes-1, false)
            additionalCount++;
        } else if(reserveClothing.get(lostOnes+1) === true) {
            reserveClothing.set(lostOnes + 1, false)
            additionalCount++;
        }
    });

    return clothAvailable + additionalCount;
}