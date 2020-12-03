class MaxHeap {
    constructor() {
        this.array = [null]
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    siftUp(idx) {
        if (idx === 1) return;
        let parent = this.getParent(idx);

        if (this.array[parent] > this.array[idx]) {
            return;
        } else {
            [this.array[parent], this.array[idx]] = [this.array[idx], this.array[parent]];
            this.siftUp(parent);
        };
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length-1);
    }

    siftDown(idx) {
        
        let leftChild = this.getLeftChild(idx);
        let rightChild = this.getRightChild(idx);
        let leftVal = this.array[leftChild];
        let rightVal = this.array[rightChild];
        
        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;

        if (this.array[idx] > leftVal && this.array[idx] > rightVal) return;

        let swap;

        if (leftVal > rightVal) {
            swap = leftChild;
        } else {
            swap = rightChild;
        };

        [this.array[swap], this.array[idx]] = [this.array[idx], this.array[swap]];
        this.siftDown(swap);
    }

    deleteMax() {
        if (this.array.length === 1) return null;
        if (this.array.length === 2) return this.array.pop();

        let max = this.array[1];
        this.array[1] = this.array.pop();

        this.siftDown(1);
        return max;
    }
}

module.exports = {
    MaxHeap
};