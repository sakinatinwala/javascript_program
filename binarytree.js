function bst() {
    this.root = null;
}

bst.prototype.insert = function( obj ){

    if ( this.root == null ){
        this.root = new node(obj);
    }
    else if (this.root.value > obj){
         if (this.root.left != null ){
            this.root.left.insert( obj );
        }
        else {
            this.root.left = new node(obj);
        }
    } 
    else if (this.root.value < obj){
        if (this.root.right != null ){
            this.root.right.insert( obj );
        }
        else {
            this.root.right = new node(obj);
        }
    }
}

    function node( obj ){

   this.left = null;
    this.right = null;
    this.value = obj;

    }

node.prototype.insert = function( obj ){

if (this.value > obj){

    if (this.left != null){
        this.left.insert( obj )
    }
    else{
        this.left = new node(obj);
    }
}

else if (this.value < obj){

    if (this.right != null){
        this.right.insert( obj )
    }
    else{
        this.right = new node(obj);
    }
}
else{
    console.log("duplicated bst key")
}

}

var bst = new bst();
bst.insert(25);
bst.insert(75);
bst.insert(12);
bst.insert(37);
bst.insert(87);
bst.insert(63);

console.log(bst.root.value);
console.log(bst.root.left.value);
console.log(bst.root.right.value);
console.log(bst.root.right.left.value);
console.log(bst.root.right.right.value);
console.log(bst.root.right.left.right.value);