// If you have any types that are SHARED BY MANY COMPONENTS,put them here// If you have any types that are SHARED BY MANY COMPONENTS,put them here

export type FishInfo = {
  name: string;
  url: string;
};

export type GameBoard = {
  checkAnswer: (name: string) => void;
  fishInfo: FishInfo;
};

export type FinalScore = {
  totalCount: number;
  correctCount: number;
};
export type ScoreBoard = {
  incorrectCount: number;
  correctCount: number;
  answersLeft: string[];
};
