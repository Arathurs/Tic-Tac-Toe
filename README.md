## Tic-Tac-Toe/React

Simple tic-tac-toe web application game, created with React.


## Fixes v3
- Uses Context API to apply theme styles across components regardless of nesting structure.
- Fixed bug which resulted in a small fraction of undeserved wins.
- Refactored various components, implementing render props to significantly enhance reusability of components.
- Added logic to allow a user to choose their symbol, and by so doing the order of moves. X always starts first, regardless of whether controlled by the computer or human.
- Added logic which results in the software detecting a draw, which results when either player makes the last move which fills the tic-tac-toe container without a resulting win.
- Added logic for game over events (either the human player's win, the computer, or a draw by either) to make the resulting animations more meaningful and appealing to the user.