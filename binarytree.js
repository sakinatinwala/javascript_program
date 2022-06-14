const Node = () =>{
    if(data) {
       this.data = data;
       this.left = null;
       this.right = null;
    }
 }
 const binaryTree = () => {
	this.root = null;
	this.insert = insert;
    this.insertNode = insertNode;
	
}

const insert =(data) => {
       let newNode = new Node(data);
       if(this.root === null){
          this.root = newNode;
       }else{
          this.insertNode(this.root, newNode);
       }
    }
const insertNode = (node, newNode) => {
       if(newNode.data < node.data){
          if(node.left === null){
             node.left = newNode;
          }else{
             this.insertNode(node.left, newNode);
          }
       } else {
          if(node.right === null){
             node.right = newNode;
          }else{
             this.insertNode(node.right,newNode);
          }
       }
    }
 console.log(10);
 console.log(8);
 console.log(13);
 console.log(11);