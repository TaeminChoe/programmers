import solution from "./solution";

describe("신규 아이디 추천", () => {
  test("case1", () => {
    expect(solution("...!@BaT#*..y.abcdefghijklm")).toBe("bat.y.abcdefghi");
  });
  test("case2", () => {
    expect(solution("z-+.^.")).toBe("z--");
  });
  test("case3", () => {
    expect(solution("=.=")).toBe("aaa");
  });
  test("case4", () => {
    expect(solution("123_.def")).toBe("123_.def");
  });
  test("case5", () => {
    expect(solution("abcdefghijklmn.p")).toBe("abcdefghijklmn");
  });
});
