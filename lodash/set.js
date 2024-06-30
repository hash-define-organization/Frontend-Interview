const object = {};

function helper(obj, path, value) {
    const [curr, ...rest] = path;
    if (rest.length) {
        let isNum = `${+rest[0]}` === rest[0];
        if (!obj[curr]) {
            obj[curr] = isNum ? [] : {};
        }

        if (typeof obj[curr] === 'object') {

            obj[curr] = helper(isNum ? [] : {}, rest, value);

        } else {
            obj[curr] = helper(obj[curr], rest, value);
        }

    } else {
        obj[curr] = value;
    }

    return obj;

}
function set(obj, path, value) {
    let pathArr = !Array.isArray(path) ? path.replaceAll('[', '.').replaceAll(']', '').split('.') : path;
    helper(obj, pathArr, value)

}

set(object, 'a[0].b.c', 4)
console.log(object);
// => 4

set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z);
// => 5