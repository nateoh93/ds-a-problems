function breadthFirstSearch(startingNode, targetVal) {
    let queue = [startingNode];
    let visited = new Set();

    while (queue.length) {
        let current = queue.shift();
        if (visited.has(current)) continue;
        visited.add(current);
        if (current.val === targetVal) return current;
        queue.push(...current.neighbors);
    }

    return null;
}

module.exports = {
    breadthFirstSearch
};