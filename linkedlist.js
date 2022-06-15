const node = {
    id: null,
    value: null,
    next: null,

}

const createNode = (id, value, next) => {
    const node = {
        id: id,
        value: value,
        next: next,
    }
    return node;
}

const linkedList = [];

const insertNode = (id, value, next) => {
    const node = createNode(id, value, next);
    linkedList.push(node);
}

const removeNode = (id, value, next) => {
    const node = createNode(id, value, next);
    linkedList.pop(node);
}

insertNode(1, 10, 2);
insertNode(2, 20, 3);
insertNode(3, 20, null);
insertNode(4, 20, null);
removeNode(2, 20, null);
console.log(linkedList);
