let tree = [];
const insertNode = (value) => {
	let node = {
		id: tree.length,
		value,
		leftChild: null,
		rightChild: null,
		parentId: null
	}
	console.log(node.id)
	const {
		index, child
	} = findParent(value);
	if(index !== null) {
		node.parentId = index
	}
	if(child === "left") {
		updateLeftChildOfParent(node.id, index)
	} else if(child === "right") {
		updateRightChildOfParent(node.id, index)
	}
	tree.push(node);
}
const findParent = (value) => {
	for(let i = 0; i < tree.length; i++) {
		if(tree[i].value < value) {
			if(tree[i].rightChild === null) {
				return {
					index: i,
					"child": "right"
				};
			}
		} else {
			if(tree[i].leftChild === null) {
				return {
					index: i,
					"child": "left"
				};
			}
		}
	}
	return {
		index: null,
		"child": null
	}
}
const updateLeftChildOfParent = (leftChild, parentId) => {
	tree[parentId].leftChild = leftChild
}
const updateRightChildOfParent = (rightChild, parentId) => {
	tree[parentId].rightChild = rightChild
}
const deleteN = (value) => {
	deleteNode(tree, value)
}
let val
const deleteNode = (tree, value) => {
	//console.log(value)
	const smallestNode = (rightChild, value) => {
			for(let x = 0; x < tree.length; x++) {
				if(rightChild === tree[x].id) {
					val = tree[x].value
					console.log("value:" + val)
					tree[x - 1].value = val
					tree[x - 1].rightChild = tree[x].rightChild
					tree[x - 1].leftChild = tree[x].leftChild
					while(tree[x].rightChild !== null) {
						smallestNode(tree[x].rightChild)
					}
				}
			}
			return tree
		}
		//console.log(value)
	for(let i = 0; i < tree.length; i++) {
		if(tree === null) {
			return tree;
		} else if(value === tree[i].value) {
			if(tree[i].leftChild === null && tree[i].rightChild === null) {
				replace(tree[i].value, null);
			} else if(tree[i].rightChild === null) {
				console.log("left:" + tree[i].leftChild)
					//console.log("value:"+tree[i].value)
				replace(tree[i].value, tree[i].leftChild)
			} else if(tree[i].leftChild === null) {
				console.log("right" + tree[i].rightChild)
				replace(tree[i].value, tree[i].rightChild);
			}
			else {
				let rightIndex = tree.indexOf(tree[i + 1])
				let rightChild = tree[i].rightChild
				console.log(rightChild)
				smallestNode(rightChild, tree[i].value)
				tree.splice(rightIndex, 1)
				console.log(tree)
			}
		}
	}
}
const search = (value) => {
   for(let i = 0; i < tree.length; i++) {
		if(tree[i].value === value) {
		   return true;
		}
   }
}
const replace = (value, nodeValue) => {
	//console.log(nodeValue)
	let delVal
	let leftChld
	let i
	if(nodeValue !== null) {
		for(let k = 0; k < tree.length; k++) {
			for(let j = 0; j < tree.length; j++) {
				if(tree[j].id === nodeValue) {
					delVal = tree[j].value
					leftChld = tree[j].leftChild
					i = tree.indexOf(tree[j])
					tree.splice(i, 1)
				}
				if(value === tree[k].value) {
					console.log(tree[k].value)
					tree[k].value = delVal
					tree[k].leftChild = leftChld
				}
			}
			return tree[k].rightChild
		}
	} else if(nodeValue === null) {
		for(let k = 0; k < tree.length; k++) {
			if(value === tree[k].value) {
				let m = tree.indexOf(tree[k])
				tree.splice(m, 1)
			}
		}
	}
	console.log(tree.length, tree)
}
insertNode(50)
insertNode(60)
insertNode(55)
insertNode(40)
insertNode(35)
if(search(35) == true){
    console.log("Value is present in tree");
}
else{
   console.log("Value is not present in tree"); 
}
console.log(tree)
deleteN(40)