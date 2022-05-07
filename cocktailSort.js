const coctailSort = (array) => {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        for (let i = left; i < right; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
            }
        }
        right--;
        for (let i = right; left < i; i--) {
            if (array[i] < array[i - 1]) {
                [array[i], array[i - 1]] = [array[i - 1], array[i]];
            }
        }
        left++;
    }
    return array;
};

console.log(coctailSort([1, 3, 4, 2, 8, 9, 5, 11, 10]));
