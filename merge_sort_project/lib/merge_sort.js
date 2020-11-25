function merge(array1, array2) {
    let results = [];
    while (array1.length || array2.length) {
        let ele1 = array1.length ? array1[0] : Infinity;
        let ele2 = array2.length ? array2[0] : Infinity;
        if (ele1 > ele2) {
            results.push(array2.shift());
        } else {
            results.push(array1.shift());
        };
    };
    return results.concat(array1, array2);
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let midIdx = Math.floor(array.length / 2);
    let left = array.slice(0, midIdx);
    let right = array.slice(midIdx);

    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);

    return merge(leftSorted, rightSorted);
}

module.exports = {
    merge,
    mergeSort
};