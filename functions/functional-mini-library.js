function isArray(obj) {
    return (obj instanceof Array);
}
//console.log(isArray([]))

function isBoolean(obj) {
    return (typeof obj === 'boolean' || obj instanceof Boolean);
}
//console.log(isBoolean(false))

function isDate(obj) {
    return (obj instanceof Date);
}
//console.log(isDate(new Date()))

function isNumber(obj) {
    return (typeof obj === 'number' || obj instanceof Number);
}
//console.log(isNumber(-1))

function isString(obj) {
    return (typeof obj === 'string' || obj instanceof String);
}
//console.log(isString('dsf'))

function isFunction(obj) {
    return (typeof obj === 'function');
}
//console.log(isFunction(Math.sin))

function isUndefined(obj) {
    return (obj === undefined);
}
//console.log(isUndefined(undefined))

function isNull(obj) {
    return (obj === null);
}
//console.log(isNull(NaN))

function first(arr) {
    return arr[0];
}

function last(arr) {
    return arr[arr.length - 1];
}

function skip(arr, number) {
    let newArr = [];
    for (let i = number; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function take(arr, number) {
    let newArr = [];
    for (let i = 0; i < number; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
