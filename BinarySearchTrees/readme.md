# Binary Search Tree (BST)

This project implements a Binary Search Tree (BST) in JavaScript. A BST is a type of binary tree where each node has at most two children, and the left child's value is smaller than the parent's value, while the right child's value is greater. This structure allows for efficient searching, insertion, and deletion operations.

## Features

This implementation includes various methods for interacting with the tree, such as adding, removing, and finding values, as well as checking properties like height, balance, and more.

### Functions

- **`buildTree(array)`**  
  Converts an array of numbers into a balanced binary search tree. Duplicates are removed, and the array is sorted before creating the tree.

- **`insert(value)`**  
  Inserts a new value into the tree.

- **`delete(value)`**  
  Deletes a value from the tree, adjusting the tree structure as needed.

- **`findMin()`**  
  Finds and returns the node with the smallest value in the tree (leftmost node in the right subtree).

- **`find(value)`**  
  Searches for a specific value in the tree. Returns the node containing that value or `null` if not found.

- **`levelOrder(callback)`**  
  Traverses the tree level by level (breadth-first traversal) and applies the provided callback function to each node.

- **`inOrder(callback)`**  
  Traverses the tree in-order (left, root, right) and applies the provided callback function to each node.

- **`preOrder(callback)`**  
  Traverses the tree pre-order (root, left, right) and applies the provided callback function to each node.

- **`postOrder(callback)`**  
  Traverses the tree post-order (left, right, root) and applies the provided callback function to each node.

- **`height()`**  
  Calculates and returns the height of the tree, which is the longest path from the root to a leaf.

- **`depth(value)`**  
  Finds the depth of a given value in the tree (distance from the root).

- **`isBalanced()`**  
  Checks if the tree is balanced. A balanced tree has a height difference of no more than one between the left and right subtrees at any node.

- **`balance()`**  
  Rebalances the tree if it is unbalanced by building a new tree from the sorted values of the current tree.

- **`prettyPrint()`**  
  Prints the tree in a visually appealing format to the console, showing the structure of the tree.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone hhttps://github.com/Alfa06N/Repositorio.git
   ```

2. Navigate into the project directory:

   ```
   cd BinarySearchTrees
   ```

3. Feel free to do whatever you want (run only the main.js file).

   ```
   node main.js
   ```
