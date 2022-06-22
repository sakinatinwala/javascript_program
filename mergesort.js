const array = [23, 4, 67, 32, 1, 7, 56, 5, 89];
const mergeSort = (array) => {
   if (array.length < 2){
      return array;
   }
   const middle = Math.floor(array.length / 2);
   const left = array.slice(0, middle), right = array.slice(middle, array.length);
   return merge(mergeSort(left), mergeSort(right));
}
const merge = (left, right) => {
   const sort = [];
   while (left.length && right.length) {
      if (left[0] <= right[0]){
        sort.push(left.shift());
      }
      else{
         sort.push(right.shift());
      }
   }
   while (left.length){
      sort.push(left.shift());
   }
   while (right.length){
      sort.push(right.shift());
   }
   return sort;
}
console.log(mergeSort(array));