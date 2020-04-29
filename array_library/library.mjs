export function take(array, n) {
    let newArray = [];
    for (let i = 0; i < n; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

//console.log(take([1,2,3,4,5], -1));

export function skip(array, n) {
    let newArray = [];
    for (let i = 1; i <= array.length; i++) {
        if (i > n) {
            newArray.push(array[i -1]);
        }
    }
    return newArray;
}

//console.log(skip([1, 2, 3, 4, 5], 2));

export function map(array, callback) {
    let newArray = [];
    for (let elem of array) {
        newArray.push(callback(elem));
    }
    return newArray;
}

//console.log(map([1, 2, 3], a => a * 2 ));


export function reduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let elem of array) {
        accumulator = callback(accumulator, elem);
    }
    return accumulator;
}

//console.log(reduce([1,2,3], (a,b) => a + b, 0));

export function filter(array, callback) {
    let newArray = [];
    for (let elem of array) {
        if (callback(elem)) {
            newArray.push(elem);
        }
    }

    return newArray;
}

//console.log(filter([1, 2, 3, 4, 5], (a) => a > 2 ));

export function foreach(array, callback) {
    for (let elem of array) {
        callback(elem);
    }
}

//foreach([1, 2, 3, 4, 5], (a) => console.log(a*2));