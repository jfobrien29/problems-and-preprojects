

function canKColorGraph(adjMatrix, k) {
    const visitedColorMap = new Map();
    for (let nodeIndex = 0; nodeIndex < adjMatrix.length; nodeIndex++) {
        const neighborColors = new Set();

        for (let adjNode = 0; adjNode < adjMatrix[nodeIndex].length; adjNode++) {
            if (adjMatrix[nodeIndex][adjNode] === 1 && visitedColorMap.has(adjNode)) {
                neighborColors.add(adjNode);
            }
        }
        const nodeColor = getNonAdjColor(neighborColors, k);
        if (nodeColor == k) {
            return false;
        }
        visitedColorMap.set(nodeIndex, nodeColor);
    }
    return true;
}

function getNonAdjColor(neighborColors, k) {
    for(let i = 0; i < k; i++) {
        if (!neighborColors.has(i)) {
            return i;
        }
    }

    return k;
}

const adj = [[0, 1, 1, 0],
             [1, 0, 1, 0],
             [1, 1, 0, 1],
             [0, 0, 1, 0]]

console.log(canKColorGraph(adj, 3));