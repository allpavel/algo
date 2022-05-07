const bubbleSort = (arr) => {
    let swapped = false;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swapped = true;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        if (!swapped) {
            return arr;
        } else {
            swapped = true;
        }
        count++;
    }
    return arr;
};
