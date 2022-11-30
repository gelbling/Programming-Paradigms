// Gabriel Amodeo Elbling
// Prog. Paradigms
// HW11, Q2

// import scanner for user input
import java.util.Scanner;
// import random for random computer decision
import java.util.Random;

public class TicTacToe {

  public static void main(String[] args) {

    // create runnig game control variable
    boolean runGame = true;

    // create new game board class
    GameBoard board = new GameBoard();

    // create user input scanner object
    Scanner stdInput = new Scanner(System.in);

    while (runGame) {

      // display current board
      board.displayBoard(board.board);

      // check if game is over
      if (board.checkGame(board.board, runGame)) {
        break;
      }

      // get user input
      System.out.print("Enter Your X's Position (1-9): ");
      int userIn = stdInput.nextInt();

      // add user's X to the board
      if (board.checkBoard(board.board, userIn)) {
        board.move(board.board, userIn, 'X');
      }
      // if position is not valid, restart loop
      else {
        System.out.println("PLEASE ENTER VALID POSITION!");
        continue;
      }

      // computer's turn
      System.out.println("Computer's turn...");
      System.out.println();
      computerPlay(board);

    }

  }

  public static void computerPlay(GameBoard board) {

    // intialize random class
    Random rand = new Random();
    // control variable for trying to place O's
    boolean findSpot = true;

    while (findSpot) {

      // if board is fully filled, break out of loop
      if (board.fullBoard(board.board)) {
        break;
      }

      // generate random number 1-9
      int randNum = (int) (rand.nextInt(9) + 1);

      // check if there is spot on the board
      if (board.checkBoard(board.board, randNum)) {
        // make move
        board.move(board.board, randNum, 'O');
        break;
      } else {
        continue;
      }
    }

  }

}