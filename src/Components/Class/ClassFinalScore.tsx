import { Component } from "react";
import { FinalScore } from "../../types";

export class ClassFinalScore extends Component<FinalScore> {
  render() {
    const { correctCount, totalCount } = this.props;

    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
