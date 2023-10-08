import {useMemo, useState} from "react";
import {usePreviousData} from "../../utils/customHooks/usePreviousData";
import BingoScore from "../bingoScore/BingoScore";
import Tile from "../tile/Tile";
import {
  BingoType,
  formatRowsToColumns,
  generateCards,
  getDiagonals,
  getWinners,
} from "../../utils/card";
import {CARD_SIZE} from "../../utils/const";
import "./BingoCard.css";
import Confetti from "react-confetti";
import RetryModal from "../retryModal/RetryModal";

const middleMatrix = Math.floor((CARD_SIZE - 1) / 2);
const initialSelectedTiles: BingoType = {
  [middleMatrix]: [middleMatrix],
};

const cards = generateCards(CARD_SIZE);

const BingoCard = () => {
  const [selectedTiles, setSelectedTiles] =
    useState<BingoType>(initialSelectedTiles);

  const onTileClick = (rowIndex: number, columnIndex: number) => {
    const updatedTiles = {...selectedTiles};

    if (
      rowIndex !== columnIndex ||
      (rowIndex === columnIndex && middleMatrix !== rowIndex)
    ) {
      if (updatedTiles[rowIndex]) {
        if (updatedTiles[rowIndex].includes(columnIndex)) {
          updatedTiles[rowIndex] = updatedTiles[rowIndex].filter(
            (x: number) => x !== columnIndex
          );

          if (updatedTiles[rowIndex].length === 0) {
            delete updatedTiles[rowIndex];
          }
        } else {
          updatedTiles[rowIndex].push(columnIndex);
        }
      } else {
        updatedTiles[rowIndex] = [columnIndex];
      }

      setSelectedTiles(updatedTiles);
    }
  };

  const [winningRows, winningColumns, winningDiagonals] = useMemo(() => {
    const rows = getWinners(selectedTiles);
    const columns = getWinners(formatRowsToColumns(selectedTiles));
    const diagonals = getWinners(getDiagonals(selectedTiles));
    return [rows, columns, diagonals];
  }, [selectedTiles]);

  const bingoWinningCombinations = useMemo(() => {
    return winningRows.length + winningColumns.length + winningDiagonals.length;
  }, [winningRows, winningColumns, winningDiagonals]);

  const prevBingoWinningCombinations = usePreviousData(
    bingoWinningCombinations
  );

  const isNewWinningCombo = useMemo(() => {
    return bingoWinningCombinations > (prevBingoWinningCombinations || 0);
  }, [bingoWinningCombinations, prevBingoWinningCombinations]);

  const retryModal = useMemo(() => {
    if (bingoWinningCombinations === 5) {
      return true;
    }
    return false;
  }, [bingoWinningCombinations]);

  const isTileInSelected = (rowIndex: number, columnIndex: number) =>
    selectedTiles[rowIndex]?.includes(columnIndex);

  const handleRetry = () => {
    const initialSelectedTiles: BingoType = {
      [middleMatrix]: [middleMatrix],
    };
    setSelectedTiles(initialSelectedTiles);
  };

  return (
    <div className="container">
      <BingoScore bingoCount={bingoWinningCombinations} />
      {isNewWinningCombo && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      {retryModal && <RetryModal handleRetry={handleRetry} />}
      {cards.map((row, i) => (
        <div className="row" key={`row${i}`}>
          {row.map((tile, j) => (
            <Tile
              key={`${i}*${j}`}
              middleTile={i === j && i === middleMatrix}
              content={tile}
              onToggle={() => onTileClick(i, j)}
              selected={isTileInSelected(i, j)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BingoCard;
