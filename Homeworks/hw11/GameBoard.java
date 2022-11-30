// Gabriel Amodeo Elbling
// Prog. Paradigms
// HW11, Q2

public class GameBoard {

  // create 2d char array gameboard
  public char[][] board = { { ' ', ' ', ' ' }, { ' ', ' ', ' ' }, { ' ', ' ', ' ' } };

  // check if board is full
  public static boolean fullBoard(char[][] board) {

    // loop through board, check if value is empty
    for (int x = 0; x < board.length; x++) {
      for (int y = 0; y < board[x].length; y++) {
        if (board[x][y] == ' ') {
          return false;
        }
      }
    }

    // if no value is empty, return true
    return true;
  }

  // check game state for win, loss or draw
  public boolean checkGame(char[][] board, boolean runGame) {

    // check for player win
    if (winState(board, 'X')) {
      System.out.println("Player 1 has won!");
      runGame = false;
      return true;
    }

    // check for computer win
    if (winState(board, 'O')) {
      System.out.println("Computer has won!");
      runGame = false;
      return true;
    }

    // if board is full and no one won, then it is a draw
    if (fullBoard(board)) {
      System.out.println("Draw!");
      runGame = false;
      return true;
    }

    return false;

  }

  // make move on board
  public void move(char[][] board, int spot, char value) {
    // switch statement to map player entry to spot on board
    switch (spot) {
      case 1:
        board[0][0] = value;
        break;
      case 2:
        board[0][1] = value;
        break;
      case 3:
        board[0][2] = value;
        break;
      case 4:
        board[1][0] = value;
        break;
      case 5:
        board[1][1] = value;
        break;
      case 6:
        board[1][2] = value;
        break;
      case 7:
        board[2][0] = value;
        break;
      case 8:
        board[2][1] = value;
        break;
      case 9:
        board[2][2] = value;
        break;
    }
  }

  // check if a spot is valid on the board or not
  public static boolean checkBoard(char[][] board, int spot) {
    // switch statement to map player entry to spot on board
    // returns true if spot is empty, false if its not empty
    switch (spot) {
      case 1:
        if (board[0][0] == ' ') {
          return true;
        } else {
          return false;
        }
      case 2:
        if (board[0][1] == ' ') {
          return true;
        } else {
          return false;
        }
      case 3:
        if (board[0][2] == ' ') {
          return true;
        } else {
          return false;
        }
      case 4:
        if (board[1][0] == ' ') {
          return true;
        } else {
          return false;
        }
      case 5:
        if (board[1][1] == ' ') {
          return true;
        } else {
          return false;
        }
      case 6:
        if (board[1][2] == ' ') {
          return true;
        } else {
          return false;
        }
      case 7:
        if (board[2][0] == ' ') {
          return true;
        } else {
          return false;
        }
      case 8:
        if (board[2][1] == ' ') {
          return true;
        } else {
          return false;
        }
      case 9:
        if (board[2][2] == ' ') {
          return true;
        } else {
          return false;
        }
    }
    return false;
  }

  // display the board on console
  public void displayBoard(char[][] board) {

    // print first row
    System.out.print(String.format(" %c", board[0][0]));
    System.out.print(" | ");
    System.out.print(String.format("%c", board[0][1]));
    System.out.print(" | ");
    System.out.println(String.format("%c ", board[0][2]));
    System.out.println("-----------");

    // print second row
    System.out.print(String.format(" %c ", board[1][0]));
    System.out.print("| ");
    System.out.print(String.format("%c ", board[1][1]));
    System.out.print("| ");
    System.out.println(String.format("%c", board[1][2]));
    System.out.println("-----------");

    // print third row
    System.out.print(String.format(" %c", board[2][0]));
    System.out.print(" | ");
    System.out.print(String.format("%c ", board[2][1]));
    System.out.print("|");
    System.out.println(String.format(" %c ", board[2][2]));

    // print separator and new lines
    System.out.println();
    System.out.println("########################");
    System.out.println();

  }

  // check for win states row, column or diagonal
  public static boolean winState(char[][] board, char value) {

    // check for diagonal alignment win
    if ((board[0][0] == value) && (board[1][1] == value) && (board[2][2] == value)) {
      return true;
    }
    if ((board[2][0] == value) && (board[1][1] == value) && (board[0][2] == value)) {
      return true;
    }

    // check for column alignment win
    if ((board[0][0] == value) && (board[1][0] == value) && (board[2][0] == value)) {
      return true;
    }
    if ((board[0][1] == value) && (board[1][1] == value) && (board[2][1] == value)) {
      return true;
    }
    if ((board[0][2] == value) && (board[1][2] == value) && (board[2][2] == value)) {
      return true;
    }

    // check for row alignment win
    if ((board[0][0] == value) && (board[0][1] == value) && (board[0][2] == value)) {
      return true;
    }
    if ((board[1][0] == value) && (board[1][1] == value) && (board[1][2] == value)) {
      return true;
    }
    if ((board[2][0] == value) && (board[2][1] == value) && (board[2][2] == value)) {
      return true;
    }

    // if none return true, then there is no win
    return false;

  }

}