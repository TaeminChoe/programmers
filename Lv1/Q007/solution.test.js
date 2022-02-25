import solution from "./solution";

describe("내적", () => {
  test("case1", () => {
    expect(solution("baabaa")).toBe(1);
  });
  test("case2", () => {
    expect(solution("cdcd")).toBe(0);
  });
});
