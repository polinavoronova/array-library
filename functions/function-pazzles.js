function filter(array, callback) {
    let newArray = [];
    for (let elem of array) {
        if (callback(elem)) {
            newArray.push(elem);
        }
    }
    return newArray;
}

//console.log(filter([1, 2, 3, 4, 5], (a) => a > 2 ));

function averageEvenNum(array) {
    let sum = 0;
    let counter = 0;
    for (let elem of array) {
        if (elem%2 === 0) {
            sum += elem;
            counter += 1;
        }
    }
    return sum/counter;
}

console.log(averageEvenNum([1, 23, 2, 6, 12, 0]));