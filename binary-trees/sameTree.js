const isSameTree = (r1, r2) => {
  // dfs method to traverse
  const dfs = (root1, root2) => {
    // if the values are null for both, return true
    if (!root1 && !root2) return true;

    // if one node is not null, or if both are not null but with different values, return false
    if (!root1 || !root2 || root1.val !== root2.val) return false;

    // traverse both left and right. If one side returns false, it is not the same tree
    return dfs(root1.left, root2.left) && dfs(root1.right, root2.right);
  };

  return dfs(r1, r2);
};
