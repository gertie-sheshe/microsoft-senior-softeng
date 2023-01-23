const isSymmetric = (root) => {
  const r1 = root;
  const r2 = root;

  if (root === null) return true;

  const traverse = (leftNode, rightNode) => {
    if (leftNode === null || rightNode === null) {
      return leftNode === rightNode;
    }

    if (leftNode.val !== rightNode.val) return false;

    // Only when the values are identical do we continue to dfs
    return (
      traverse(leftNode.left, rightNode.right) &&
      traverse(leftNode.right, rightNode.left)
    );
  };

  return traverse(r1.left, r2.right);
};
