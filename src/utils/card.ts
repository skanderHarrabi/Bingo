import {CARD_SIZE, DATA} from "./const";

export interface BingoType {
  [key: string]: number[];
}

export const generateCards = (n: number): string[][] => {
  const middleRowIndex = Math.floor(n / 2);
  const middleColumnIndex = Math.floor(n / 2);

  const grid = Array.from({length: n}, (_, rowIndex) =>
    Array.from({length: n}, (_, columnIndex) => {
      if (rowIndex === middleRowIndex && columnIndex === middleColumnIndex) {
        return "Famous Landmarks Bingo";
      } else {
        const randomIndex = Math.floor(Math.random() * DATA.length);
        return DATA[randomIndex].description;
      }
    })
  );

  return grid;
};

export const getDiagonals = (tilesList: BingoType): BingoType => {
  const draftX: number[] = [];
  const draftY: number[] = [];
  Object.keys(tilesList).forEach((i) => {
    const numX = Number(i);
    const numY = CARD_SIZE - 1 - Number(i);
    if (tilesList[i].includes(numX)) {
      draftX.push(numX);
    }
    if (tilesList[i].includes(numY)) {
      draftY.push(numY);
    }
  });
  return {x: draftX, y: draftY};
};

export const formatRowsToColumns = (tilesList: BingoType): BingoType => {
  const draft: BingoType = {};
  Object.keys(tilesList).forEach((i) => {
    const numI = Number(i);
    tilesList[i].forEach((j) => {
      if (!draft[j]) {
        draft[j] = [numI];
      } else {
        draft[j].push(numI);
      }
    });
  });
  return draft;
};

export const getWinners = (tilesList: BingoType): string[] =>
  Object.keys(tilesList).reduce((winners: string[], key) => {
    if (tilesList[key].length === CARD_SIZE) {
      winners.push(key);
    }
    return winners;
  }, []);
