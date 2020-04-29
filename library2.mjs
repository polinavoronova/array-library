function sort(array, sortingAlgorithm) {
    switch (sortingAlgorithm) {
        case "selection":
            return selectionSort(array);
        case "quick":
            return quickSort(array);
    }
}

function selectionSort(array) {
    let newArray = [];
    while (array.length > 0) {
        let maxIndex = max(array);
        newArray.push(array[maxIndex]);
        array = removeElement(array, maxIndex);
    }
    return newArray;
}

function max(array) {
    let maxIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[maxIndex] < array[i]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

function removeElement(array, index) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i === index) {
            continue;
        }
        newArray.push(array[i]);
    }
    return newArray;
}

//console.log(selectionSort([3, 5, 0, 1]))


function quickSort(array) {
    if (array.length < 2) {
        return array;
    }
    let arrayLess = [];
    let arrayGreater = [];
    let pivotIndex = Math.round(Math.random() * array.length);
    let pivot = array[pivotIndex];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            arrayLess.push(array[i]);
        } else if (array[i] > pivot) {
            arrayGreater.push(array[i]);
        }
    }
    return quickSort(arrayLess).concat(pivot, quickSort(arrayGreater));
}

//console.log(quickSort([3, 1, 5, 0, 4]));

function minInteger(array) {
    let minIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[minIndex] > array[i]) {
            minIndex = i;
        }
    }
    return array[minIndex];
}

//console.log(minInteger([1, 5, 7, 3, -5]));

function maxInteger(array) {
    let maxIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[maxIndex] < array[i]) {
            maxIndex = i;
        }
    }
    return array[maxIndex];
}

//console.log(maxInteger([1, 5, 7, 3, -5]));

function mediumInteger(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum / array.length;
}

//console.log(mediumInteger([1, 2, 3, -5]))

function getMaxSubSum(array) {
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            currentSum += array[i];
        }

        if (array[i] < 0 || i === array.length - 1) {
            maxSum = currentSum;
            currentSum = 0;
        }

    }
        return maxSum;
}

//console.log(getMaxSubSum([-1, 2, 3, -9]))