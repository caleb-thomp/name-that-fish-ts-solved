import { Component } from "react";
import "./styles/score-board.css";
import { ScoreBoard } from "../../types";

export class ClassScoreBoard extends Component<ScoreBoard> {
  render() {
    const { incorrectCount, correctCount, answersLeft } =
      this.props;

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
