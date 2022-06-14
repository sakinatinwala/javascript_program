const Queue = [];
const size = 3;

const enqueue = (element) => {
    if(Queue.length < size) {
        Queue.push(element);
        return Queue;
    }
}

const dequeue = () => {
    if(Queue.length > 0) {
        return Queue.shift();
    }
}

const peek = () => {
    return Queue[Queue.length - 1];
}

enqueue(1);
console.log(Queue);
enqueue(2);
console.log(Queue);
enqueue(3);
console.log(Queue);
console.log(peek());
enqueue(4);
console.log(Queue);
dequeue();
console.log(Queue)
dequeue();
console.log(Queue)
dequeue();
console.log(Queue)
dequeue();
console.log(Queue)
