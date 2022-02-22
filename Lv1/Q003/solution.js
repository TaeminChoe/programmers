/* 로또의 최고 순위와 최저 순위 */

function solution(lottos, win_nums) {
  var numOfZero = lottos.filter((value) => value === 0).length;

  if (numOfZero === lottos.length) {
    return [1, 6];
  }

  var cnt = 0;
  lottos.forEach((e) => {
    if (win_nums.find((value) => value === e)) cnt += 1;
  });
  if (cnt === 0) {
    return [6, 6];
  }

  return [7 - cnt - numOfZero, 7 - cnt];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));

export default solution;
