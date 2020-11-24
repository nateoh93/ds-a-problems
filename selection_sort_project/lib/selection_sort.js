function swap(arr, index1, index2) {
    let tempEle = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tempEle;
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentMin = i;

        for (let j = i+1; j < arr.length; j++) {
            if (arr[currentMin] > arr[j]) {
                currentMin = j;
            };
        };

        swap(arr, i, currentMin);
    };

    return arr;
}

module.exports = {
    selectionSort,
    swap
};