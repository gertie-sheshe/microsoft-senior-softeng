const maxDepth = (root) => {
  if (!root) return 0;

  // Note: Depth is Tree Height + 1 of the longest side;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
