function breadthFirstArray(root) {
    let queue = [root];
    let results = [];

    while (queue.length) {
        let current = queue.shift() 
        results.push(current.val);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return results;
}

module.exports = {
    breadthFirstArray
};