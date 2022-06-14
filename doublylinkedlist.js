const Node = (element) => {
	this.element = element;
	this.next = null;
	this.previous = null;
}

const List = () => {
	this.head = new Node("head");
	
	this.find = find;
	this.findLast = findLast;

	this.remove = remove;
	this.insert = insert;
	this.display = display;
	this.dispReverse = dispReverse;
		
}

const find = (item) => {
	let currNode = this.head;
	while(currNode.element != item) {
		currNode = currNode.next;
	}

	return currNode;
}

const display = () => {
	let currNode = this.head.next;
	while (currNode != null) {
		console.log(currNode.element);
		currNode = currNode.next;
	}
}

const insert = (newElement, item) => {
	let newNode = new Node(newElement);
	let current = this.find(item);
	newNode.next = current.next;
	newNode.previous = current;
	current.next = newNode;
	
}

const remove = (item) => {
	let currNode = this.find(item);
	if (currNode.next != null) {
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	}
}

const findLast = () => {
	let currNode = this.head;
	while (currNode.next != null) {
		currNode = currNode.next;
	}

	return currNode;
}

const dispReverse = () => {

	let currNode = this.head;
	currNode = this.findLast();

	while(currNode.previous != null) {
		console.log(currNode.element);
		currNode = currNode.previous;
	}
}

console.log(insert,["Conway", "head"]);
console.log(insert,["Russellville", "Conway"]);
console.log(insert,["Carlisle", "Russellville"]);
console.log(insert,["Alma", "Carlisle"]);
console.log(display());

console.log(remove,["Carlisle"]);
console.log(display());
console.log(dispReverse());