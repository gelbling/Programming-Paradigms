// Gabriel Amodeo Elbling
// Prog. Paradigms
// HW11, Q1

public class Point {

  private int x;
  private int y;

  public Point(int x, int y) {
    this.x = x;
    this.y = y;
  }

  @Override
  public boolean equals(Object other) {

    Point otherCast = (Point) other;

    // non-null
    if (other == null)
      return false;

    // check if both are equally distant from origin (0,0)
    if (Math.sqrt(Math.pow(otherCast.x, 2) + Math.pow(otherCast.y, 2)) == Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))) {
      return true;
    }

    // don't even bother! they have different types
    if (getClass() != other.getClass())
      return false;

    return x == otherCast.x && y == otherCast.y;
  }

  @Override
  public int hashCode() {
    int varCodeX = x;
    int varCodeY = y;
    // inits hash with the var code for one of the fields
    int hash = varCodeX;
    // hash = <prime number> * hash + var_code;
    hash = 41 * hash + varCodeY;
    return hash;
  }

  @Override
  public String toString() {
    return "[" + x + ", " + y + "]";
  }

}