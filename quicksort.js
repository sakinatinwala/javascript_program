const array = [5,3,7,6,2,9,13,1,27,25];
const swap = (array, left, right) => {
   let temp = array[left];
   array[left] = array[right];
   array[right] = temp;
}
const partition = (array, left, right) => {
   let pivot = array[Math.floor((right + left) / 2)];
   let i = left;
   let j = right;
   while (i <= j) {
      while (array[i] < pivot) {
         i++;
      }
      while (array[j] > pivot) {
         j--;
      }
      if (i <= j) {
         swap(array, i, j);
         i++;
         j--;
      }
   }
   return i;
}
const quickSort = (array, left = 0, right = array.length - 1) => {
   let index;
   if (array.length > 1) {
      index = partition(array, left, right);
      if (left < index - 1) {
         quickSort(array, left, index - 1);
      }
      if (index < right) {
         quickSort(array, index, right);
      }
   }
   return array;
}
let sortedArray = quickSort(array);
console.log(sortedArray);