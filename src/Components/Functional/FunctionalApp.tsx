import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishes } from "../../data";

export function FunctionalApp() {
  const [state, setState] = useState({
    answersLeft: initialFishes.map((fish) => fish.name),
    correctCount: 0,
    incorrectCount: 0,
    questionIndex: 0,
  });

  const checkAnswer = (name: string) => {
    setState((prevState) => {
      const isCorrect =
        initialFishes[prevState.questionIndex].name ===
        name;
      return {
        ...prevState,
        correctCount:
          prevState.correctCount + (isCorrect ? 1 : 0),
        incorrectCount:
          prevState.incorrectCount + (isCorrect ? 0 : 1),
        questionIndex: prevState.questionIndex + 1,
        answersLeft: prevState.answersLeft.slice(1),
      };
    });
  };

  const {
    answersLeft,
    correctCount,
    incorrectCount,
    questionIndex,
  } = state;
  const totalCount = correctCount + incorrectCount;

  return (
    <>
      {totalCount < 4 ? (
        <div>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            answersLeft={answersLeft}
          />
          <FunctionalGameBoard
            fishInfo={initialFishes[questionIndex]}
            checkAnswer={checkAnswer}
          />
        </div>
      ) : (
        <FunctionalFinalScore
          totalCount={totalCount}
          correctCount={correctCount}
        />
      )}
    </>
  );
}
