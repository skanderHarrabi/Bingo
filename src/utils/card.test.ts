import {
  formatRowsToColumns,
  generateCards,
  getDiagonals,
  getWinners,
} from "./card";

describe("Card utils", () => {
  test("getWinners should return the matched result", () => {
    const draft = {x: [0, 1, 2, 3, 4], y: [1, 2]};
    expect(getWinners(draft)).toEqual(["x"]);
  });

  test("generateCards should return N*N Matrix", () => {
    const cards = generateCards(5);
    expect(cards.length).toBe(5);
    cards.forEach((row) => expect(row.length).toBe(5));
  });

  test("formatRowsToColumns should return the matched result", () => {
    const draft = {1: [0, 1, 2], 4: [0, 2, 4]};
    expect(formatRowsToColumns(draft)).toEqual({
      0: [1, 4],
      1: [1],
      2: [1, 4],
      4: [4],
    });
  });

  test("getDiagonals should return the matched result", () => {
    const draft = {0: [0, 4], 1: [1, 3], 2: [2, 2], 3: [1, 3], 4: [0, 4]};
    expect(getDiagonals(draft)).toEqual({
      x: [0, 1, 2, 3, 4],
      y: [4, 3, 2, 1, 0],
    });
  });

  test("generateCards with size 0 should return an empty array", () => {
    const cards = generateCards(0);
    expect(cards.length).toBe(0);
  });

  test("formatRowsToColumns with empty input should return an empty object", () => {
    const draft = {};
    expect(formatRowsToColumns(draft)).toEqual({});
  });

  test("getDiagonals with no input should return an empty object", () => {
    const draft = {};
    expect(getDiagonals(draft)).toEqual({x: [], y: []});
  });

  test("getWinners with no input should return an empty array", () => {
    const draft = {};
    expect(getWinners(draft)).toEqual([]);
  });
});
