class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


function reconstructTree(preArr, inOrderArray) {
    if (inOrderArray.length == 0) {
        return null;
    }

    const rootVal = preArr.shift();
    const head = new TreeNode(rootVal);

    const rootIndex = inOrderArray.indexOf(rootVal);
    head.left = reconstructTree(preArr, inOrderArray.slice(0, rootIndex));
    head.right = reconstructTree(preArr, inOrderArray.slice(rootIndex+1));

    return head;
}


preArr = ['a', 'b', 'd', 'e', 'c'];
inArr = ['d', 'b', 'e', 'a', 'c'];

const head = reconstructTree(preArr, inArr);

function printTreeInOrder(head) {
    if (!head) {
        return
    }

    console.log(head);
    printTreeInOrder(head.left);
    printTreeInOrder(head.right);
}

printTreeInOrder(head);