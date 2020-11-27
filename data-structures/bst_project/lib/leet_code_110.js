// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
    if (!root) return true;
    
    let height = Math.abs(treeHeight(root.left) - treeHeight(root.right)) <= 1;
    return height && isBalanced(root.left) && isBalanced(root.right)
}

function treeHeight(root) {
    if (!root) return -1;
    if (!root.left && !root.right) return 0;

    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right))
    
}