/* 숫자 문자열과 영단어 */

function solution(s) {
  var number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  number.forEach((e, idx) => {
    if (s.includes(e)) {
      var regex = new RegExp(e, "g");
      s = s.replace(regex, idx.toString());
    }
  });
  return Number(s);
}

export default solution;

/*
예외 : 한 문자열에 중복된 여러개의 숫자가 있을 경우,
js의  replace는 하나의 문자열만 변환이 가능하기 때문에, 정규 표현식을 활용해야 한다.
*/
