import { sortNoDuplicates } from "./mergeSort.js";

function Node(data = null, left = null, right = null) {
  return { data, left, right };
}

export function Tree(arr) {
  let root = null;
  const buildTree = (newArr = arr) => {
    sortNoDuplicates(newArr);
    root = buildTreeHelper(newArr, 0, newArr.length - 1);
  };
  const buildTreeHelper = (arr, s, e) => {
    if (s > e) return null;
    let mid = Math.floor((s + e) / 2);
    const root = Node(arr[mid], s, e);
    root.left = buildTreeHelper(arr, s, mid - 1);
    root.right = buildTreeHelper(arr, mid + 1, e);
    return root;
  };
  const prettyPrint = (node = root, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  const insert = (value) => {
    let node = find(value);
    if (node !== null) return root;
    root = insertHelper(value, root);
  };

  const insertHelper = (value, node) => {
    if (node === null) {
      return Node(value);
    }
    if (value < node.data) {
      node.left = insertHelper(value, node.left);
    } else {
      node.right = insertHelper(value, node.right);
    }
    return node;
  };

  const deleteItem = (data) => {
    root = deleteItemHelper(data, root);
  };

  const deleteItemHelper = (data, node) => {
    if (node === null) return node;
    if (data < node.data) {
      node.left = deleteItemHelper(data, node.left);
    } else if (data > node.data) {
      node.right = deleteItemHelper(data, node.right);
    } else {
      if (node.left === null) return node.right;
      else if (node.right === null) return node.left;
      else {
        const succ = getSuccessor(node);
        node.data = succ.data;
        deleteItemHelper(succ.data, node.right);
      }
    }
    return node;
  };

  const getSuccessor = (root) => {
    let curr = root.right;
    while (curr !== null && curr.left !== null) {
      curr = curr.left;
    }
    return curr;
  };

  const find = (data, node = root) => {
    if (node === null) return null;
    if (data < node.data) {
      return find(data, node.left);
    } else if (data > node.data) {
      return find(data, node.right);
    } else return node;
  };

  const levelOrder = (callback) => {
    if (root === null) return root;
    if (typeof callback !== "function") {
      throw new Error("A callback funtion is required!");
    }
    let queue = [root];
    while (queue.length) {
      let curr = queue.shift();
      callback(curr);
      if (curr.left !== null) queue.push(curr.left);
      if (curr.right !== null) queue.push(curr.right);
    }
  };

  const preOrder = (callback) => {
    if (typeof callback !== "function")
      throw new Error("A callback function is required!");
    preOrderHelper(callback, root);
  };

  const preOrderHelper = (callback, root) => {
    if (root === null) return;
    callback(root);
    preOrderHelper(callback, root.left);
    preOrderHelper(callback, root.right);
  };
  const inOrder = (callback) => {
    if (typeof callback !== "function")
      throw new Error("A callback function is required!");
    inOrderHelper(callback, root);
  };

  const inOrderHelper = (callback, root) => {
    if (root === null) return;
    inOrderHelper(callback, root.left);
    callback(root);
    inOrderHelper(callback, root.right);
  };
  const postOrder = (callback) => {
    if (typeof callback !== "function")
      throw new Error("A callback function is required!");
    postOrderHelper(callback, root);
  };

  const postOrderHelper = (callback, root) => {
    if (root === null) return;
    postOrderHelper(callback, root.left);
    postOrderHelper(callback, root.right);
    callback(root);
  };

  const height = (value) => {
    let node = find(value);
    if (node === null) return -1;
    return heightHelper(node);
  };

  const heightHelper = (root) => {
    if (root === null) return -1;
    return Math.max(heightHelper(root.left), heightHelper(root.right)) + 1;
  };

  const depth = (node, treeRoot = root) => {
    if (treeRoot === null) return -1;
    if (treeRoot.data === node) return 0;
    let nextDepth =
      node < treeRoot.data
        ? depth(node, treeRoot.left)
        : depth(node, treeRoot.right);
    return nextDepth === -1 ? -1 : nextDepth + 1;
  };

  const isBalanced = (node = root) => {
    if (node === null) return true;
    let leftHeight = heightHelper(node.left);
    let rightHeight = heightHelper(node.right);
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    return isBalanced(node.left) && isBalanced(node.right);
  };

  const rebalance = () => {
    let nodes = [];
    inOrder((node) => nodes.push(node.data));
    root = buildTreeHelper(nodes, 0, nodes.length - 1);
  };

  return {
    buildTree,
    prettyPrint,
    insert,
    deleteItem,
    find,
    levelOrder,
    preOrder,
    inOrder,
    postOrder,
    height,
    depth,
    isBalanced,
    rebalance,
  };
}
