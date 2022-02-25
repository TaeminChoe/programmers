/* 짝지어 제거하기 */
function solution(s) {
  var stack = [];
  var top = -1;
  s = s.split("");

  s.forEach((e) => {
    // console.log(stack);
    top += 1;
    stack.push(e);

    if (top >= 1) {
      if (stack[top - 1] === stack[top]) {
        stack.pop();
        top -= 1;
        stack.pop();
        top -= 1;
      }
    }
  });

  return stack.length > 0 ? 0 : 1;
}

export default solution;
