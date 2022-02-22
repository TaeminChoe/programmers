function solution(new_id) {
  // 1. 대문자 -> 소문자
  var answer = new_id.toLowerCase();
  // console.log(answer);

  // 2. 정규식
  answer = answer.match(/[a-z0-9-_.]/g).join("");
  // console.log(answer);

  // 3. 마침표 중복 제거
  answer = answer.replace(/[.]{2,}/g, ".");
  // console.log(answer);

  // 4. 처음이나 끝에 마침표 제거
  answer = answer.startsWith(".") ? answer.slice(1) : answer;
  answer = answer.endsWith(".") ? answer.slice(0, -1) : answer;
  console.log(answer);

  return answer;
}

module.exports = solution;
