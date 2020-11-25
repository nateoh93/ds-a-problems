function quickSort(array) {
    if (array.length <= 1) return array;
    let pivot = array.shift();
    let left = array.filter(ele => ele <= pivot)
    let right = array.filter(ele => ele > pivot)

    let leftSort = quickSort(left);
    let rightSort = quickSort(right);

    return [...leftSort, pivot, ...rightSort]
}


module.exports = {
    quickSort
};