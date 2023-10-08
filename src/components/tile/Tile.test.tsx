import {screen, render, fireEvent} from "@testing-library/react";
import Tile from "./Tile";

describe("Tile", () => {
  test("renders Tile component as selected", () => {
    render(
      <Tile
        content="Hello"
        onToggle={() => {}}
        selected={true}
        middleTile={false}
      />
    );

    const tileElement = screen.getByText(/Hello/i);
    expect(tileElement).toBeInTheDocument();
    expect(tileElement).toHaveClass("tile selected");
  });

  test("renders Middle Tile component", () => {
    render(
      <Tile
        content="Bingo"
        onToggle={() => {}}
        selected={false}
        middleTile={true}
      />
    );

    const tileElement = screen.getByText(/Bingo/i);
    expect(tileElement).toBeInTheDocument();
    expect(tileElement).toHaveClass("tile middle");
  });

  test("invokes onToggle callback when clicked", () => {
    const mockOnToggle = jest.fn();
    render(
      <Tile
        content="Bingo"
        onToggle={mockOnToggle}
        selected={false}
        middleTile={false}
      />
    );

    const tileElement = screen.getByText(/Bingo/i);
    fireEvent.click(tileElement);
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });
});
