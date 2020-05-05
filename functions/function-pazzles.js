Currying
function f(x, y, z) {
    return x * y * z;
}
//curry(f) = x → (y → (z → N));
function curry(f) {
    return (x) => {
        return (y) => {
            return (z) => {
                return f(x, y, z);
            }
        }
    }
}

//console.log(curry(f)(2)(3)(4));

//Linear fold
function f(array, callback, initialValue) {
    let result = initialValue;
    for (let index = 0; index < array.length; index++) {
        result = callback(result, array[index], index);
    }
    return result;
}

//console.log(f([1, 2, 3], (a, b) => a + b, 10));

function map(array, callback) {
    let newArray = [];
    for (let elem of array) {
        newArray.push(callback(elem));
    }
    return newArray;
}

//console.log(map([1, 2, 3, 4], (a) => a*2))

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

//Lazy evaluation
function lazy(func, ...args) {
    return () => func(...args);
}

//let l = lazy((a, b) => a + b, 2, 3);
//console.log(l())

//Memoization
function memoization(fn) {
    let cache = {};
    return (n) => {
        let result = cache[n];
        if (!result) {
            console.log(cache);
            result = fn(n);
            cache[n] = result;
        }
        return result;
    }
}

//const add = memoization((n) => (n + 10));
//console.log(add(2));
//console.log(add(5));
//console.log(add(3));

function averageEvenNum(array) {
    let sum = 0;
    let counter = 0;
    for (let elem of array) {
        if (elem % 2 === 0) {
            sum += elem;
            counter += 1;
        }
    }
    return sum / counter;
}

//console.log(averageEvenNum([1, 23, 2, 6, 12, 0]));

//Multiplication
function multiplication(...args) {
    let result = 1;
    for (let elem of args) {
      result = result*elem;
    };
    return result;
}

//console.log(multiplication(1, 2, 3, 4, 2))