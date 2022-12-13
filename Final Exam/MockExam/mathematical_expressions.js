/*
One way to computationally solve mathematical expressions is to parse the expression and represent it as a binary tree. For example, consider the expression 2*7+3. It can be represented as a binary tree as follows:
Notice that the computed tree has the following characteristics:

numbers are always leaves of the tree;
operator nodes always have two children;
the operator with the least precedence in the expression is placed upper in the tree in comparison to the operators with higher precedence. 
each node has either no children or two children
AST.png

Develop a JavaScript program that converts a binary tree represented using adjacency lists to a string that contains the mathematical expression. This adjacency list representation of the tree labels the nodes by pre-pending it with an ID. For example, the tree above is represented by an adjacency list as follows:

{
  "n1_+": [ "n2_*", "n3_3" ],
  "n2_*": [ "n4_2", "n5_7" ],
  "n4_2": [],
  "n5_7": [],
  "n3_3": []
}
Input / Output Example:
Test 1
Input: 

tree =  {
  "n1_+": ["n2_*","n3_3"], 
  "n2_*":["n4_2","n5_7"], 
  "n4_2":[],
  "n5_7":[],
  "n3_3":[]
}
root_node = "n1_+" 
Returned value

"2*7+3"

Test 2
Input: 

tree = {
  'n1_+': ['n2_3', 'n3_*'], 
  'n3_*': ['n4_/', "n5_2"], 
  'n4_/': ["n6_10", "n7_5"], 
  "n6_10": [], 
  "n7_5": [], 
  "n5_2": [], 
  'n2_3': []
}
root_node = "n1_+" 
Returned value

"3+10/5*2"

Constraints:
You can safely assume that the root_node will be in the tree dictionary
The function will return a string
The tree and the root_node are passed as the argument to the function:
function tree_to_text(tree, root_node){
    // your implementation here
    // your function will return a string!
}
*/