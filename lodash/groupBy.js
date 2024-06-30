function groupBy(items, keys) {
    let result = {};
    for (let curr in items) {
        let key = typeof keys === 'function' ? keys(items[curr]) : items[curr][keys];
        if (result.hasOwnProperty(key)) {
            result[key].push(items[curr]);
        } else {
            result[key] = [items[curr]];
        }
    }
    return result;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': [4.2], '6': [6.1, 6.3] }

// The `_.property` iteratee shorthand.
console.log(groupBy(['one', 'two', 'three'], 'length'));
// => { '3': ['one', 'two'], '5': ['three'] }

console.log(groupBy({
    'one': 'one',
    'two': 'wow',
    'three': "wwww"
}, 'length'));