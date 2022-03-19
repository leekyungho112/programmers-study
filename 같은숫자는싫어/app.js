function solution(arr) {
  var answer = [];

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  arr.forEach((_, i) => {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  });

  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
