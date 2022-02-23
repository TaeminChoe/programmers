import solution from "./solution";

describe("음양 더하기", () => {
  test("case1", () => {
    expect(solution([4, 7, 12], [true, false, true])).toBe(9);
  });
  test("case2", () => {
    expect(solution([1, 2, 3], [false, false, true])).toBe(0);
  });
});
