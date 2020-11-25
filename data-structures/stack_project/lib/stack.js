// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.bottom) {
            this.bottom = newNode;
            this.top = newNode
        }

        let reassigned = this.top;
        this.top = newNode;
        newNode.next = reassigned;
        this.length++
        return this.size();
    }

    pop() {
        if (this.size() === 0) return null;

        let removed = this.top;
        
        if (this.size() === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            let reassigned = removed.next;
            this.top = reassigned;
        }

        this.length--;
        return removed.value;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
