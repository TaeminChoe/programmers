const solution = (new_id) => {
  // 1. 대문자 -> 소문자
  var answer = new_id.toLowerCase();

  // 2. 정규식
  answer = answer.match(/[a-z0-9-_.]/g).join("");

  // 3. 마침표 중복 제거
  answer = answer.replace(/[.]{2,}/g, ".");

  // 4. 처음이나 끝에 마침표 제거
  answer = answer.startsWith(".") ? answer.slice(1) : answer;
  answer = answer.endsWith(".") ? answer.slice(0, -1) : answer;

  // 5. 빈 문자열?
  if (answer === "") answer = "a";

  // 6. 16자 이상?
  answer = answer.length >= 16 ? answer.slice(0, 15) : answer;
  answer = answer.endsWith(".") ? answer.slice(0, -1) : answer;

  // 7. 2자 이하?
  if (answer.length <= 2) {
    answer += Array(4 - answer.length).join(answer[answer.length - 1]);
  }

  console.log(answer);
  return answer;
};

solution("...!@BaT#*..y.abcdefghijklm");
solution("ab");

export default solution;
