/**
* @param {Array<any>}
* @return {Array<any[]>}
* @Question  JSON.stringify
* @ProblemStatement 
**/

function stringify(data) {
    // null
    // string
    // number => -inf , inf -> null
    // array
    // boolean
    // BigInt -> throw error
    // Symbol
    // Date => toIsostring
    // object -> rec
    // function -> undefined
    if (data === null) {
        return 'null';
    }

    if (data != data) {
        return 'null';
    }

    if (typeof data === 'bigint') {
        throw new Error("nhi chalega");
    }
    if (typeof data === 'string' || data instanceof String) {
        return `"${data}"`
    }

    if (typeof data === 'number' || data instanceof Number) {
        return isFinite(data) ? `${data}` : 'null';
    }

    if (typeof data === 'boolean' || data instanceof Boolean) {
        return `${data}`
    }

    if (typeof data === 'symbol' || data instanceof Symbol) {
        return undefined; // check ??
    }

    if (data === undefined) {
        return 'null'; // check ??
    }

    if (typeof data === 'function') {
        return undefined;
    }

    if (data instanceof Date) {
        return `"${data.toISOString()}"`
    }

    if (Array.isArray(data) || data instanceof Array) {
        const arr = data.map((ele) => typeof ele === 'symbol' ? 'null' : stringify(ele));
        return `[${arr.join(',')}]`
    }

    if (typeof data === 'object') {

        const arr = Object.entries(data).reduce((acc, [key, value]) => {
            if (value === undefined) {
                return acc;
            }
            const newValue = `"${key}":${stringify(value)}`
            acc.push(newValue);
            return acc;
        }, [])

        return `{${arr.join(',')}}`
    }
}
const f = { a: 1 };
[f].e = f;
// {"a":10,"b":"shivam","date":"2024-08-27T17:05:39.676Z","d":true,"e":[12,12],"f":{"a":{"a":{"a":1}}}}
console.log(JSON.stringify({ a: 10, b: new String("shivam"), date: new Date(), c: Symbol("s"), d: true, e: [12, 12], f: { a: { a: f } } }))
// console.log(JSON.stringify({ a: undefined, b: null, c: NaN, d: -Infinity, e: function aa() { } }))  // 
// console.log(stringify({ a: undefined, b: null, c: NaN, d: -Infinity, e: function aa() { } }))
console.log(JSON.stringify({ a: 10, b: new String("shivam"), date: new Date(), c: Symbol("s"), d: true, e: [12, 12], f: { a: { a: f } } }))
