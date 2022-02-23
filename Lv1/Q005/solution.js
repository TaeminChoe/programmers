/* 음양 더하기 */

function solution(absolutes, signs) {
  var answer = 0;
  signs.forEach((e, idx) => {
    var sign = e ? 1 : -1;
    answer += absolutes[idx] * sign;
  });
  return answer;
}

export default solution;
