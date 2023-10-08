import {render, screen, fireEvent} from "@testing-library/react";
import BingoCard from "./BingoCard";

describe("BingoCard", () => {
  test("clicking on a tile selects it", () => {
    render(<BingoCard />);

    const tileElement = screen.getByText(/Famous Landmarks Bingo/i);
    fireEvent.click(tileElement);
    expect(tileElement).toHaveClass("tile middle");
  });

  test("clicking on a selected tile deselects it", () => {
    render(<BingoCard />);

    const tileElement = screen.getByText(/Famous Landmarks Bingo/i);
    fireEvent.click(tileElement);
    fireEvent.click(tileElement);
    expect(tileElement).not.toHaveClass("tile selected");
  });

  test("clicking on the middle tile does not deselect it", () => {
    render(<BingoCard />);

    const middleTileElement = screen.getByText(/Famous Landmarks Bingo/i);
    fireEvent.click(middleTileElement);
    fireEvent.click(middleTileElement);
    expect(middleTileElement).toHaveClass("tile middle");
  });
});
