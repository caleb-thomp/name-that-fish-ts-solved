import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishes } from "../../data";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const questionIndex = correctCount + incorrectCount;
  const currentFish = initialFishes[questionIndex];
  const answersLeft = initialFishes
    .map((obj) => obj.name)
    .slice(questionIndex);

  const checkAnswer = (fishName: string) => {
    if (fishName === currentFish.name) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
  };

  return (
    <>
      {questionIndex < 4 ? (
        <div>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            answersLeft={answersLeft}
          />
          <FunctionalGameBoard
            fishInfo={currentFish}
            checkAnswer={checkAnswer}
          />
        </div>
      ) : (
        <FunctionalFinalScore
          totalCount={questionIndex}
          correctCount={correctCount}
        />
      )}
    </>
  );
}
