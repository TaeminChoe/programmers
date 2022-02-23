import solution from "./solution";

describe("내적", () => {
  test("case1", () => {
    expect(solution([1, 2, 3, 4], [-3, -1, 0, 2])).toBe(3);
  });
  test("case2", () => {
    expect(solution([-1, 0, 1], [1, 0, -1])).toBe(-2);
  });
});
