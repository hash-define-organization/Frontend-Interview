/**
 * @param {any} obj1
 * @param {any} obj2
 * @return {boolean}
 */
function isEqual(obj1, obj2, map = new Map()) {
    if (map.has(obj1) || map.has(obj2)) return true;
    map.set(obj1, obj2);

    if (typeof obj1 !== typeof obj2) {
        return false;
    }

    if (obj1 === obj2) {
        return true;
    }

    for (let key in obj1) {
        let val1 = obj1[key];
        let val2 = obj2[key];

        let isObj = val1 && val2 && typeof obj1 === 'object' && typeof obj2 === 'object';
        if (isObj) {
            if (!isEqual(val1, val2, map)) {
                return false;
            }
        } else if (val1 !== val2) {
            return false;
        }
    }

    for (let key in obj2) {
        if (!obj1.hasOwnProperty(key)) {
            return false;
        }
    }

    return true;
}

let obj1 = {
    name: "shivam",
    mi: 10,
    a: 10,
}

let obj2 = {
    a: 10,
    name: "shivam",
    mi: 10,
}


const a = { a: 'bfe' }
const b = { a: 'bfe' }

console.log(isEqual(a, b)) // true
console.log(a === b) // false

const c = [1, a, '4']
const d = [1, b, '4']

console.log(isEqual(c, d)) // true
console.log(c === d) // false

// obj1 === obj2 + order matter
let result = JSON.stringify(obj1) === JSON.stringify(obj2)
console.log(isEqual(obj1, obj2));
console.log(isEqual(null, undefined))