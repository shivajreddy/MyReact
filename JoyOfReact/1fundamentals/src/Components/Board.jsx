const x = 21;

const board = [null, null, null, null, null, null, null, null, null];

/*
// Render the board
// input: array of values
// for each value in array, create the tile component

// Implementing history using stack, to hold the board snapshots.
// 1st stack that holds all the previous snapshot's
// 2nd stack to hold all the next snapshot's


*/

/*
TOP LEVEL STATE

1. player's turn
2. game finished?
3. 
*/

/*
Check if game is won

inputs: {board, playersTurn, gameFinished}

*/

function checkWinner(board) {
  // vertical
  for (let i = 0; i < 3; i++) {
    console.log("checking vertical, at idx=", i);
    console.log(board[i], board[i + 3], board[i + 6]);
    if (board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
      console.log("winner found. it is ", board[i]);
      return;
    }
  }
  // horizontal
  for (let i = 0; i < 9; i += 3) {
    console.log("checking horizontal, at idx=", i);
    if (board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
      console.log("winner found. it is ", board[i]);
      return;
    }
  }
  // diagonal
  if (board[0] === board[5] && board[5] === board[8]) {
    console.log("winner found. it is ", board[5]);
    return;
  }
  if (board[2] === board[5] && board[5] === board[6]) {
    console.log("winner found. it is ", board[5]);
    return;
  }
}

function Board() {
  const board0 = ["x", "o", "x", "x", "o", null, "x", null, null];
  checkWinner(board0);

  return (
    <div>
      <h2>Board</h2>
      <h3>{x}</h3>
    </div>
  );
}

export default Board;
