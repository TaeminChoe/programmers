import solution from "./solution";

describe("없는 숫자 더하기", () => {
  test("case1", () => {
    expect(solution([1, 2, 3, 4, 6, 7, 8, 0])).toBe(14);
  });
  test("case2", () => {
    expect(solution([5, 8, 4, 0, 6, 7, 9])).toBe(6);
  });
});
