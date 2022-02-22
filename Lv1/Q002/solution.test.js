import solution from "./solution";

describe("신규 아이디 추천", () => {
  test("case1", () => {
    expect(solution("one4seveneight")).toBe(1478);
  });
  test("case2", () => {
    expect(solution("23four5six7")).toBe(234567);
  });
  test("case3", () => {
    expect(solution("2three45sixseven")).toBe(234567);
  });
  test("case4", () => {
    expect(solution("123")).toBe(123);
  });
});
