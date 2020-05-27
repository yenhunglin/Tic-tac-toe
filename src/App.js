import React from "react";
import "./App.css";
import "tachyons";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      board: ["", "", "", "", "", "", "", "", ""],
      turn: "0",
    };
  }

  squareClick(index) {
    let turn = this.state.turn;
    let board = this.state.board;

    board[index] = turn;

    const winnerPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnerPattern.length; i++) {
      let check = winnerPattern[i];
      let c0 = check[0];
      let c1 = check[1];
      let c2 = check[2];
      // console.log(board[c0], board[c1], board[c2]);
      if (
        board[c0] == board[c1] &&
        board[c1] == board[c2] &&
        board[c1] == board[c0] &&
        board[c0] != "" &&
        board[c1] != "" &&
        board[c2] != ""
      ) {
        console.log("winner!");
        // console.log("winning");
      }
    }

    // if (board[0] && board[1] && board[2] == "x") {
    //   alert("yes");
    // } else if (board[3] && board[4] && board[5] == "x") {
    //   alert("yes");
    // }

    // for (let i = 0; i < winnerPattern.length; i++) {
    //   let check = winnerPattern[i];
    //   let c1 = check[0];
    //   let c2 = check[1];
    //   let c3 = check[2];
    //   console.log(board[c1]);
    //   console.log(board[c2]);
    //   console.log(board[c3]);

    //   if (board[c1] && board[c2] && board[c3] == "x") {
    //     alert("X is the winner");
    //   }
    // }

    if (this.state.turn === "x") {
      this.state.turn = "0";
    } else {
      this.state.turn = "x";
    }

    this.setState({
      board: board,
    });
    // console.log(board);
  }

  render() {
    return (
      <div className="App">
        <div class="boarder">
          {this.state.board.map((currentValue, index, arr) => {
            return (
              <div onClick={() => this.squareClick(index)} class="square">
                {currentValue}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
