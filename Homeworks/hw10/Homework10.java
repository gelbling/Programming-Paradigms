// Gabriel Amodeo Elbling
// Prog. Paradigms
// HW10, Q1

public class Homework10{
    // check function
    public static boolean check(char[] correctPositions, String word) {
        // define asterix for comparison
        char asterix = '*';
        // loop through length of the correctPositions array
        for (int i = 0; i < correctPositions.length; i++) {
            // check if letters match
            if (word.charAt(i) == correctPositions[i]){
              
            }
            // check if the correct position is the asterix
            else if(correctPositions[i] == asterix){
              
            }
            // if the letters do not match, return false
            else{
              return false;
            }
        }
      // if hasn't returned, it is a valid word, return true
      return true;
    }

    //public static void main(String[] args){
    //  char[] correctPositions = new char[]{ '*', '*', '*', '*', '*'};
    //  String word = "PARADIGMS";
    //  System.out.println(check(correctPositions,word));
    //}
}
