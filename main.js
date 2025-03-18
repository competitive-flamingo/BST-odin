import { Tree } from "./bst.js";

const generateRandomNumbers = (size = 100) => {
  // fixed from to 1 to 100
  let arr = [];
  while (size--) {
    const randomNumber = Math.floor(Math.random() * (101 - 1) + 1);
    arr.push(randomNumber);
  }
  return arr;
};

let arr = generateRandomNumbers();

const tree = Tree(arr); // array will be sorted and duplicated will be filtered
tree.buildTree();
console.log(`Is the tree balanced: ${tree.isBalanced()}`);
tree.prettyPrint();

let levelOrder = [];
let preOrder = [];
let inOrder = [];
let postOrder = [];

tree.levelOrder((node) => levelOrder.push(node.data));
tree.preOrder((node) => preOrder.push(node.data));
tree.inOrder((node) => inOrder.push(node.data));
tree.postOrder((node) => postOrder.push(node.data));

console.log("Level Order:", levelOrder);
console.log("Pre Order:", preOrder);
console.log("In Order:", inOrder);
console.log("Post Order:", postOrder);

tree.insert(103);
tree.insert(120);
tree.insert(150);

console.log(`Is tree balanced: ${tree.isBalanced()}`);

tree.deleteItem(120);
tree.rebalance();
console.log(`After rebalancing,`, `Is tree balanced: ${tree.isBalanced()}`);

levelOrder = [];
preOrder = [];
inOrder = [];
postOrder = [];

tree.levelOrder((node) => levelOrder.push(node.data));
tree.preOrder((node) => preOrder.push(node.data));
tree.inOrder((node) => inOrder.push(node.data));
tree.postOrder((node) => postOrder.push(node.data));

console.log("Level Order:", levelOrder);
console.log("Pre Order:", preOrder);
console.log("In Order:", inOrder);
console.log("Post Order:", postOrder);
