import { sum } from "../sum";

test("sum function should calculate the sum of 2 numbers", () => {
  const result = sum(3, 4);
  // assertions
  expect(result).toBe(7);
});
