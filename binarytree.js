const node = {
   id: null,
   value: null,
   left : null,
   right : null,
   
}
const binaryTree = [];
const createNode = (id, value) => {
   const node = {
       id: id,
       value: value,
   }
   return node;
}

const insert = (id, value) => {
       
       const newNode = createNode(id, value);
       if(this.root === null){
           this.root = newNode;
           return this;
       }
       const current = this.root;
       while(current){
           if(value === current.value) return undefined;
           if(value < current.value){
               if(current.left === null){
                   current.left = newNode;
                   return this;
               }
               current = current.left;
           } else {
               if(current.right === null){
                   current.right = newNode;
                   return this;
               } 
               current = current.right;
           }
       }
      console.log(newNode); 
   }
insert(1,10);
insert(2,10);