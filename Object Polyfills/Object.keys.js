/**
@Polyfill
Object.myKeys
@Definition
returns an array of a given object's own enumerable string-keyed property keys
@Syntax
Object.myKeys(object or function);
@Approach
1. for-in loop (ex: for key in Obj)
2. checking if the key is of own Object (ex: Object.prototype.hasOwnProperty.call(Obj, key) or Obj.hasOwnProperty(key) )
3. maintain an array (ex: result) and push the each iteration value inside the finalArray (ex: result.push(key))
4. at the end of the for-in loop return result
**/



Object.prototype.myKeys = function (obj) {
    if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
        throw new TypeError("Object myKeys callled on non-object");
    }

    let results = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            results.push(key);
        }
    }
    return results;
}

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
};

console.log(Object.myKeys(() => { }));
// Expected output: Array []
console.log(Object.myKeys(object1));
// Expected output: Array ["a", "b", "c"]