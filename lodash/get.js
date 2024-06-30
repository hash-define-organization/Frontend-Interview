let object = {
    'a': [{
        'b': {
            'c': 3
        }
    }]
};

function get(obj, path, optional) {
    let pathArr = typeof path === 'string' ? path.replaceAll('[', '.').replaceAll(']', '').split('.') : path
    return pathArr.reduce((prev, curr) => prev?.[curr] || optional, obj)

}

console.log(get(object, "a[0].b.c")) // 3
console.log(get(object, ['a', '0', 'b', 'c'])) // 3
console.log(get(object, ['a', 'b', 'b', 'c'])) // 3
console.log(get(object, 'a.b.c', 'default'))  