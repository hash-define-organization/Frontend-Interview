/**
@Polyfill
Object.myEntries
@Definition
returns an array of a given object's own enumerable string-keyed property key-value pairs.
@Syntax
Object.myEntries(object or function);
@Approach
1. for-in loop (ex: for key in Obj)
2. checking if the key is of own Object (ex: Object.prototype.hasOwnProperty.call(Obj, key))
3. maintain an array (ex: result) and push the each iteration value inside the result (ex: result.push([key, Obj[key]]))
4. at the end of the for-in loop return result
Note: we are pushing an array which has key, value (ex: result.push([key, value]))
**/

Object.prototype.myEntries = function (obj) {
    if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
        throw new TypeError("Object myEntries callled on non-object");
    }

    let results = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            results.push([key, obj[key]]);
        }
    }
    return results;
}

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
};

console.log(Object.myEntries(() => { }));
// Expected output: Array []

console.log(Object.myEntries(object1));
// Expected output: Array [["a", "somestring"], ["b", 42], ["c", false]]