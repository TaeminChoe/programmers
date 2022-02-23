/* 없는 숫자 더하기 */

function solution(numbers) {
  var answer = 45;
  numbers.forEach((e) => (answer -= e));
  return answer;
}

export default solution;
