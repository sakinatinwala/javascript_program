function Node(element) {
	this.element = element;
	this.next = null;
	this.previous = null;
}

function List() {
	this.head = new Node("head");
	
	this.find = find;
	this.findLast = findLast;

	this.remove = remove;
	this.insert = insert;
	this.display = display;
	this.dispReverse = dispReverse;
		
}

function find(item) {
	var currNode = this.head;
	while(currNode.element != item) {
		currNode = currNode.next;
	}

	return currNode;
}


function display(list) {
	var currNode = this.head.next;
	while (currNode != null) {
		console.log(currNode.element);
		currNode = currNode.next;
	}
}


function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	newNode.previous = current;
	current.next = newNode;
	
}

function remove(item) {
	var currNode = this.find(item);
	if (currNode.next != null) {
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	}
}

function findLast() {
	var currNode = this.head;
	while (currNode.next != null) {
		currNode = currNode.next;
	}

	return currNode;
}

function dispReverse() {

	var currNode = this.head;
	currNode = this.findLast();

	while(currNode.previous != null) {
		console.log(currNode.element);
		currNode = currNode.previous;
	}
}

var cities = new List(); 
cities.insert("Conway", "head"); 
cities.insert("Russellville", "Conway"); 
cities.insert("Carlisle", "Russellville"); 
cities.insert("Alma", "Carlisle"); 
cities.display();

cities.remove("Carlisle");
cities.display();
cities.dispReverse();
