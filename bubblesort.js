let a = [33, 103, 3, 726, 200, 984, 198, 764, 9];

const bubbleSort = (a)=> {
    let swapped;
    do {
        swapped = false;
        for (let i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                let temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

bubbleSort(a);
console.log(a);