// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const node =  new Node(val);

        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        };

        this.tail = node;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head) return undefined;
        let currentNode = this.head;
        let newTail = currentNode;

        while (currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        };

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return currentNode;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let node = new Node(val)

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        };

        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) return undefined;
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead
    }

    // TODO: Implement the contains method here
    contains(target) {
        let node = this.head;

        while (node) {
            if (node.value === target) return true;
            node = node.next;
        }

        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index > this.length) return null;
        let current = this.head;
        let counter = 0;

        while (counter !== index) {
            current = current.next;
            counter++;
        };

        return current;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let node = this.get(index);

        if (node) {
            node.value = val;
            return true;
        };
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length) return this.addToTail(val);
        if (index === 0) return this.addToHead(val);
        
        const newNode = new Node(val);
        const previous = this.get(index-1);
        const next = this.get(index);
        previous.next = newNode;
        newNode.next = next;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.removeHead();
        if (index === this.length-1) return this.removeTail();
        
        const removed = this.get(index);
        const prev = this.get(index-1);
        prev.next = removed.next; 
        this.length--;
        return removed;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
