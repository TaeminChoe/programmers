const solution = require("./solution");

describe("신규 아이디 추천", () => {
  test("case1", () => {
    expect(solution("...!@BaT#*..y.abcdefghijklm")).toBe("bat.y.abcdefghi");
  });
});
