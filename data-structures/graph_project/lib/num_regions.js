function numRegions(graph) {
    let count = 0;
    let visited = new Set();

    for (let node in graph) {
        if (checkNewRegion(node, graph, visited)) count++
    }

    return count;
}

function checkNewRegion(node, graph, visited) {
    if (visited.has(node)) return false;
    visited.add(node);

    graph[node].forEach(neighbor => {
        checkNewRegion(neighbor, graph, visited)
    })

    return true;
}

module.exports = {
    numRegions
};