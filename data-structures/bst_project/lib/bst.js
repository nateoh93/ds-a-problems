class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
       this.root = null;
   }

   insert(val, root=this.root) {
       let newNode = new TreeNode(val);
       if (!this.root) {
           this.root = newNode;
           return;
       } 
       
       if (root.val > val) {
           if (!root.left) {
               root.left = newNode;
           } else {
               this.insert(val, root.left)
           }
        } else {
            if (!root.right) {
                root.right = newNode;
            } else {
                this.insert(val, root.right)
            }
        }

   }

   searchRecur(val, root=this.root) {
       if (!this.root) return false;
       
       if (val === root.val) return true;
       if (val < root.val) {
           if (!root.left) {
               return false;
           } else {
               return this.searchRecur(val, root.left)
           }
        } else {
            if (!root.right) {
                return false;
            } else {
                return this.searchRecur(val, root.right)
            }
       }
   }

   searchIter(val) {
       if (!this.root) return false;
        let stack = [this.root];
        while (stack.length) {
            let current = stack.pop();
            if (current.val === val) return true;
            if (current.right) stack.push(current.right);
            if (current.left) stack.push(current.left);
        }
       return false;
   }
}

module.exports = {
    TreeNode,
    BST
};