import "./styles/game-board.css";

import { GameBoard } from "../../types";
import { useState, ChangeEvent, FormEvent } from "react";

export function FunctionalGameBoard({
  checkAnswer,
  fishInfo,
}: GameBoard) {
  const [answer, setAnswer] = useState("");

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkAnswer(answer.toLowerCase());
    setAnswer("");
  };
  const onFormChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setAnswer(e.target.value);
  };
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishInfo.url} alt={fishInfo.name} />
      </div>
      <form id="fish-guess-form" onSubmit={onFormSubmit}>
        <label htmlFor="fish-guess">
          What kind of fish is this?
        </label>
        <input
          type="text"
          name="fish-guess"
          value={answer}
          onChange={onFormChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
