# Binary Search Tree (BST) Implementation

This project is a JavaScript implementation of a **Binary Search Tree (BST)** with various functionalities such as insertion, deletion, traversal, balancing, and more. The implementation includes a driver script that demonstrates the creation, manipulation, and balancing of a BST.

## Features

- **Node Class**: Represents a node in the BST with `data`, `left`, and `right` properties.
- **Tree Class**: Manages the BST and provides the following methods:
  - `buildTree(array)`: Builds a balanced BST from a sorted array with no duplicates.
  - `insert(value)`: Inserts a new value into the BST.
  - `deleteItem(value)`: Deletes a value from the BST.
  - `find(value)`: Finds and returns a node with the given value.
  - **Traversal Methods**:
    - `levelOrder(callback)`: Traverses the tree in breadth-first order.
    - `preOrder(callback)`: Traverses the tree in pre-order depth-first order.
    - `inOrder(callback)`: Traverses the tree in in-order depth-first order.
    - `postOrder(callback)`: Traverses the tree in post-order depth-first order.
  - `height(node)`: Returns the height of a given node.
  - `depth(node)`: Returns the depth of a given node.
  - `isBalanced()`: Checks if the tree is balanced.
  - `rebalance()`: Rebalances the tree.
- **Pretty Print**: A utility function to visualize the BST in the console.
- **Driver Script**: Demonstrates the creation, manipulation, and balancing of a BST.