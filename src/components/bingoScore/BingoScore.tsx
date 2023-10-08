import classNames from "classnames";
import "./BingoScore.css";

const BingoScore = ({bingoCount}: {bingoCount: number}) => {
  const BINGO = ["B", "I", "N", "G", "O"];

  return (
    <div className="bingo-score">
      {BINGO.map((letter, index) => (
        <span
          className={classNames(
            "bingo-letter",
            {active: index < bingoCount},
            {inactive: index >= bingoCount},
            {bordered: index <= bingoCount}
          )}
          key={letter}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default BingoScore;
