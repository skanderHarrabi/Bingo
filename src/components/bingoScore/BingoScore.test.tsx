import {render, screen} from "@testing-library/react";
import BingoScore from "./BingoScore";

describe("BingoScore component", () => {
  test("renders BINGO letters with correct classes for bingoCount = 2", () => {
    render(<BingoScore bingoCount={2} />);

    // Check B, I, N, G, O letters by their text content
    const bingoLetterB = screen.getByText("B");
    const bingoLetterI = screen.getByText("I");
    const bingoLetterN = screen.getByText("N");
    const bingoLetterG = screen.getByText("G");
    const bingoLetterO = screen.getByText("O");

    expect(bingoLetterB).toHaveClass("bingo-letter active bordered");
    expect(bingoLetterI).toHaveClass("bingo-letter active bordered");
    expect(bingoLetterN).toHaveClass("bingo-letter inactive bordered");
    expect(bingoLetterG).toHaveClass("bingo-letter inactive");
    expect(bingoLetterO).toHaveClass("bingo-letter inactive");
  });

  test("renders BINGO letters with correct classes for bingoCount = 0", () => {
    render(<BingoScore bingoCount={0} />);

    // Check B, I, N, G, O letters by their text content
    const bingoLetterB = screen.getByText("B");
    const bingoLetterI = screen.getByText("I");
    const bingoLetterN = screen.getByText("N");
    const bingoLetterG = screen.getByText("G");
    const bingoLetterO = screen.getByText("O");

    expect(bingoLetterB).toHaveClass("bingo-letter inactive");
    expect(bingoLetterI).toHaveClass("bingo-letter inactive");
    expect(bingoLetterN).toHaveClass("bingo-letter inactive");
    expect(bingoLetterG).toHaveClass("bingo-letter inactive");
    expect(bingoLetterO).toHaveClass("bingo-letter inactive");
  });

  test("renders BINGO letters with correct classes for bingoCount = 5", () => {
    render(<BingoScore bingoCount={5} />);

    // Check B, I, N, G, O letters by their text content
    const bingoLetterB = screen.getByText("B");
    const bingoLetterI = screen.getByText("I");
    const bingoLetterN = screen.getByText("N");
    const bingoLetterG = screen.getByText("G");
    const bingoLetterO = screen.getByText("O");

    expect(bingoLetterB).toHaveClass("bingo-letter active bordered");
    expect(bingoLetterI).toHaveClass("bingo-letter active bordered");
    expect(bingoLetterN).toHaveClass("bingo-letter active bordered");
    expect(bingoLetterG).toHaveClass("bingo-letter active bordered");
    expect(bingoLetterO).toHaveClass("bingo-letter active bordered");
  });
});
