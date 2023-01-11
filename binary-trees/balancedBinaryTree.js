const isBalanced = (root) => {
  let isBalanced = true;

  const traverse = (node) => {
    if (!node) return;
    if (!node.left && !node.right) return 1;

    let leftHeight = node.left ? traverse(node.left) : 0;
    let rightHeight = node.right ? traverse(node.right) : 0;

    if (Math.abs(leftHeight - rightHeight > 1)) {
      isBalanced = false;
      return;
    } else {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  };

  traverse(root);

  return isBalanced;
};
