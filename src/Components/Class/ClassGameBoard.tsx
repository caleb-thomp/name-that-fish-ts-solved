import { Component, FormEvent, ChangeEvent } from "react";
import "./styles/game-board.css";

import { GameBoard } from "../../types";

export class ClassGameBoard extends Component<GameBoard> {
  state = {
    answer: "",
  };

  formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { answer } = this.state;
    const { checkAnswer } = this.props;
    checkAnswer(answer.toLowerCase());

    this.setState({ answer: "" });
  };

  formChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ answer: e.target.value });
  };

  render() {
    const { fishInfo } = this.props;
    const { answer } = this.state;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={fishInfo.url} alt={fishInfo.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={this.formSubmit}
        >
          <label htmlFor="fish-guess">
            What kind of fish is this?
          </label>
          <input
            type="text"
            name="fish-guess"
            value={answer}
            onChange={this.formChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
