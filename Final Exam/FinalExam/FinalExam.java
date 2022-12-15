
// import datastructures
import java.util.Map;
import java.util.HashMap;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.*;

public class FinalExam {

  public String convert(Map<String, List<String>> graph, String root) {

    // initialize an output array to store DFS values
    List<String> output = new ArrayList<String>();

    // initialize a hashmap for keeping track of visited nodes
    // key=node value=true for visited, false for not visited
    HashMap<String, Boolean> visited = new HashMap<String, Boolean>();

    // populate hashmap with nodes, initialized all values to false
    for (String key : graph.keySet()) {
      visited.put(key, false);
    }

    // call helper function for recursive step
    dfsHelper(root, visited, graph, output);

    // initialize variable to hold chars
    String strOutput = "";

    // convert array of nodes to string of individual operators and numbers
    for (String i : output){
      strOutput = strOutput + i.substring(i.length() - 1);
    }

    // reutrn the output array with DFS values
    return strOutput;

  }

  // recursive function to help with DFS
  public void dfsHelper(String node, HashMap<String, Boolean> visited, Map<String, List<String>> graph,
      List<String> output) {

    // change the node's visited status to true
    visited.put(node, true);
    // add node to output array
    output.add(node);

    // loop through node's children
    for (String i : graph.get(node)) {
      // if child node is not visited, call helper function to visit it
      // if child node is already visited, keep going
      if (visited.get(i) == false) {
        dfsHelper(i, visited, graph, output);
      }

    }

  }
}
