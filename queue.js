class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        return this.items.push(element);
    }
    
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }

    size(){
        return this.items.length;
    }
 
    clear(){
        this.items = [];
    }
}

let queue = new Queue();
queue.enqueue(1);
console.log(queue.items);
queue.enqueue(2);
console.log(queue.items);
queue.enqueue(3);
console.log(queue.items);
queue.enqueue(4);
console.log(queue.items);

queue.dequeue();
console.log(queue.items);
queue.dequeue();
console.log(queue.items);
queue.dequeue();
console.log(queue.items);
queue.dequeue();
console.log(queue.items);

console.log(queue.peek());

console.log(queue.size());

queue.clear();
console.log(queue.items);
