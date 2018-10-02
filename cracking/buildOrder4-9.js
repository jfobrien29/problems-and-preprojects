// Input1 is a list of projects (string array) = [0, 1, 2, 3, 4, 5, 6];
// Input2 is a list of dependencies (array of arrays) 

/*
    1) Iterate through projects and add vals to graph
    2) While Building, mark nodes with no dependency in array
    3) Iterate through nodes w/ no dependency
        - each iteration check if node has no dependency
        - remove from queue
*/


class Node {
    constructor(project) {
        this.project = project;
        this.children = new Array();
        this.dependencies = 0;
    }
}

// projects is an array of projects ie ['a', 'b', 'c', etc...]
// dependencies is an array of touples [['a', 'b']]
function buildOrder(projects, dependencies) {

    // iterate through projects, build graph nodes and add no dependencies list
    const dependencyGraph = {};
    for (let project of projects) {
        let node = new Node(project);
        dependencyGraph[project] = node;
    }

    // iterate through dependencies, build graph children, dependencies, and remove from no dependency list
    for (let dependency of dependencies) {
        let parent = dependency[0];
        let child = dependency[1];
        dependencyGraph[parent].children.push(child);
        dependencyGraph[child].dependencies += 1;
    }

    // add all nodes on no dependency list to a queue
    let nodeQueue = Object.keys(dependencyGraph).filter((project) => {
        return dependencyGraph[project].dependencies === 0;
    })

    // loop until queue empty
    let projectOrder = [];
    while (nodeQueue.length > 0) {
        let curProject = nodeQueue.shift();
        let node = dependencyGraph[curProject];
        if (node.dependencies === 0 && !projectOrder.includes(node.project)) {
            console.log(node)
            projectOrder.push(curProject);

            node.children.forEach(child => {dependencyGraph[child].dependencies--;});
            nodeQueue.push(...dependencyGraph[curProject].children);
        }
    }

    return (projectOrder.length === projects.length) ? projectOrder : null;
}

const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
const dependencies = [['a', 'd'], ['f', 'b'], ['f', 'a'], ['b', 'd'], ['d', 'c']];

console.log(buildOrder(projects, dependencies));