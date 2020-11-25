function binarySearch(array, target) {
    if (array.length === 0) return false;

    let midIdx = Math.floor(array.length / 2);
    let left = array.slice(0, midIdx)
    let right = array.slice(midIdx+1);

    if (array[midIdx] > target) {
        return binarySearch(left, target);
    } else if (array[midIdx] < target) {
        return binarySearch(right, target)
    } else {
        return true;
    };
}

function binarySearchIndex(array, target) {
    if (array.length === 0) return -1;

    let midIdx = Math.floor(array.length / 2);
    let left = array.slice(0, midIdx)
    let right = array.slice(midIdx+1);

    if (array[midIdx] === target) {
        return midIdx
    } else if (array[midIdx] > target) {
        return binarySearchIndex(left, target);
    } else {
        let res = binarySearchIndex(right, target);
        return res === -1 ? -1 : res + midIdx + 1
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};