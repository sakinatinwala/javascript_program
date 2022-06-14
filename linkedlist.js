const Node = () => {
    if(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

const linkedlist = () => {
	this.head = new Node("head");
	
	this.removeAt = removeAt;
	this.insertFirst = insertFirst;
    this.insertLast = insertLast;
	this.insertAt = insertAt;
	this.printListData = printListData;
		
}

const insertFirst= (data) => {
    this.head = new Node(data, this.head);
    this.size++;
    
}

const insertLast = (data) => {
    let node = new Node (data);
    let current ;

    if (!this.head) {
        this.head = node;
    } else {
        current = this.head;

        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }
    this.size++;
}

const insertAt = (data, index) => {
    if(index > 0 && index > this.size) {
        return;
    }
    if(index==0) {
        this.head = new Node(data, this.head);
        return;
    }
    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while(count < index) {
        previous = current;
        count++;
        current = current.next;
    }
    node.next = current;
    previous.next = node;

    this.size++;

}

const removeAt = (index) => {
    if(index > 0 && index > this.size) {
        return;
    }
    let current = this.head;
    let previous;
    let count=0;

    if(index == 0) {
        this.head = current.next;
    } else {
        while(count < index) {
            count++;
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
    }
    this.size--;
}

const printListData = () => {
    let current = this.head;

    while(current) {
        console.log(current.data);
        current = current.next;
    }
}
console.log(insertFirst,[100]);
console.log(insertFirst,[200]);
console.log(insertFirst,[300]);
console.log(insertLast,[400]);
console.log(removeAt,[2]);

console.log(printListData());