shuffle = function (v) {
    for (
        let j, x, i = v.length;
        i;
        j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x
    );
    return v;
};

isSorted = function (v) {
    for (let i = 1; i < v.length; i++) {
        if (v[i - 1] > v[i]) {
            return false;
        }
    }
    return true;
};

bogosort = function (v) {
    let sorted = false;
    while (sorted == false) {
        v = shuffle(v);
        sorted = isSorted(v);
    }
    return v;
};
