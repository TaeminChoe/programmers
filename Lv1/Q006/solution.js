/* 내적 */

function solution(a, b) {
  var answer = 0;
  a.forEach((e, idx) => {
    answer += e * b[idx];
  });
  return answer;
}

export default solution;
